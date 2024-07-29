import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { ApiPost , ApiGet} from '../../../../service/serviceApi';

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
        name: "",
        alias: "",
        document:""
    };
    const [nombre, setNombre] = useState('');
    const [alias, setAlias] = useState('');
    const [nroDocumento, setNroDOcumento] = useState('');

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


    const loginAuth = async () => {
        // setLoading(true);
        try {          
            values = {name:nombre, alias:alias, document:nroDocumento};
            console.log(values)
            const userEdit = await ApiPost('/usuarios',values);
            console.log(userEdit);
            console.log(userEdit.result);
            if(userEdit.result === 'ok'){
                console.log(values);
                Swal.fire({
                    customClass:{
                        title:'swal2-title'
                   },
                    icon: 'success',
                    title: '¡Registro Correcto!',
                    width: 800,
                    padding: '3em',
                    // text: `${values.nombre} a ${values.alias} `,
                    backdrop: `
                      rgba(15, 238, 168, 0.2)
                      left top
                      no-repeat
                    `
                  }).then((result) => {
                    if (result.isConfirmed) {
                    window.location.href = `${process.env.PUBLIC_URL}/pages/login/login3`;
                    }
                  });
               
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
                        label="Nombre Completo"
                        margin="normal"
                        name="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>              
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Nro. Documento"
                        margin="normal"
                        name="nroDocumento"
                        type="text"
                        value={nroDocumento}
                        onChange={(e) => setNroDOcumento(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
                 <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Alias"
                        margin="normal"
                        name="alias"
                        type="text"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
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
                        REGISTRAR
                    </Button>
                </AnimateButton>
            </Box>
            {/* </form> */}
        </>
    );
};

export default RegistroUser;
