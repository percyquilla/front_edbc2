import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { ApiPost , ApiGet} from '../../service/serviceApi';

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
    // const {onChangeTab } = others;
    const theme = useTheme();

    let values = {
        email: "",
        nombre: "",
        nroDocumento:""
    };
    const [monto, setMonto] = useState(0);
    const [nombre, setNombre] = useState('');

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const consulta = async () => {
        
        const usuarioConsulta = await ApiGet('/usuarios/'+nombre,{});       
        Swal.fire({
            customClass:{
                 title:'swal2-title'
            },
            title: `¿Está seguro de transferir a ${usuarioConsulta.name}?`,
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor : '#004e89',
            cancelButtonText : `CANCELAR`,
            confirmButtonText: "ACEPTAR",
            // denyButtonText: `CANCELAR`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            //   Swal.fire("Saved!", "", "success");
            loginAuth(usuarioConsulta.name); 
            // console.log("ok")
            }
    
          });
    }
    const loginAuth = async (nombreDestino) => {
        // setLoading(true);
        try {

            const aliasx = JSON.parse(localStorage.getItem('aliasx'));

            const userEdit = await ApiPost('/transferencias',{
                "from": aliasx,
                "to": nombre,
                "amount": monto
            });
            console.log(userEdit);
            console.log(userEdit.result);
            if(userEdit.result === 'ok'){
                Swal.fire({
                    customClass:{
                        title:'swal2-title'
                   },
                    icon: 'success',
                    title: '¡Transfernecia realizada!',
                    width: 800,
                    padding: '3em',
                    text: `Has tansferido ${monto} Ebs/s a ${nombreDestino} `,
                    backdrop: `
                      rgba(15, 238, 168, 0.2)
                      left top
                      no-repeat
                    `
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                    //   Swal.fire("Saved!", "", "success");
                    window.location.href = `${process.env.PUBLIC_URL}/perfil`;
                    // console.log("ok")
                    }
                    // } else if (result.isDenied) {
                    //   Swal.fire("Changes are not saved", "", "info");
                    // }
                  });
                //   onChangeTab("perfil")
               

            }else{
                Swal.fire({
                    customClass:{
                        title:'swal2-title'
                   },
                    icon: 'error',
                    title: '¡No se realizo la tranferencia!',
                    width: 800,
                    padding: '3em',
                    text: `Has devuelto ${monto} `,
                    backdrop: `
                        rgba(253, 4, 4, 0.203)
                        left top
                        no-repeat
                      `
                  })
            }

             
        } catch (error) {

        }
    };

    return (
        <>
            {/* <form> */}
            <Grid container spacing={matchDownSM ? 0 : 2} >
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Nombre Cuenta Destino"
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
                        label="Monto"
                        margin="normal"
                        name="monto"
                        value={monto}
                        InputProps={{
                            inputProps: { min: 0 }
                          }}
                        onChange={(e) => setMonto(e.target.value)}
                        type="number"
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
                        onClick={ async () => { 
                            consulta();                          
                         }}
                    >
                        TRANSFERIR
                    </Button>
                </AnimateButton>
            </Box>
            {/* </form> */}
        </>
    );
};

export default RegistroUser;
