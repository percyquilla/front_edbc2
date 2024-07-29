import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import { ApiPost , ApiGet} from '../../../service/serviceApi';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';



const RegistroUser = ({ ...others }) => {
    const theme = useTheme();

    let values = {
        account: "",
        amount: ""
    };
    const [cuenta, setCuenta] = useState('');
    const [monto, setMonto] = useState(0);
    // const [nroDocumento, setNroDOcumento] = useState('');

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


    const loginAuth = async () => {
        // setLoading(true);
        try {          
            values = {
                account: cuenta,
                amount: monto
            };
            console.log(values)
            const userEdit = await ApiPost('/saldoInicial',values);
            // console.log(userEdit);
            console.log(userEdit.result);
            if(userEdit.result === 'ok'){
                console.log(values)
                Swal.fire({
                    customClass:{
                        title:'swal2-title'
                   },
                    icon: 'success',
                    title: '¡Transfernecia realizada!',
                    width: 800,
                    padding: '3em',
                    text: `Has tansferido ${monto} Ebs/s a ${cuenta} `,
                    backdrop: `
                      rgba(15, 238, 168, 0.2)
                      left top
                      no-repeat
                    `
                  })
                // window.location.href = `${process.env.PUBLIC_URL}/pages/login/login3`;
            }else{
                console.log(values)
            }
        } catch (error) {

        }
    };

    // {
    //     "name": "Luis Carlos III",
    //     "alias": "luis",
    //     "document": "12345678"
    // }
    return (
        <>
            {/* <form> */}
            <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Cuenta"
                        margin="normal"
                        name="nombre"
                        type="text"
                        value={cuenta}
                        onChange={(e) => setCuenta(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>              
            </Grid>
            
            <Grid container spacing={matchDownSM ? 0 : 2}>
                 <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Monto"
                        margin="normal"
                        name="monto"
                        type="number"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
                <AnimateButton>
                    <Button
                        disableElevation
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => { loginAuth() }}
                    >
                        ENVIAR
                    </Button>
                </AnimateButton>
            </Box>
            {/* </form> */}
        </>
    );
};

export default RegistroUser;
