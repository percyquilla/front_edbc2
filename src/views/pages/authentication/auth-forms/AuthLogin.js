import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ApiPost, ApiGet } from '../../../../service/serviceApi';
import { toast } from 'react-toastify';

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
    Stack,
    Typography, TextField,FilledInput,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    
    localStorage.removeItem("aliasx");
    localStorage.removeItem("name");
    localStorage.removeItem("document");

    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [usuarioLogin, setUsarioLogin] = useState("");
    const [password, setPassword] = useState("");

    const loginAuth = async () => {
        // setLoading(true);
        try {
            // values = {name:nombre, alias:alias, document:nroDocumento};
            // console.log(values)
            const userEdit = await ApiGet('/usuarios/' + usuarioLogin, {});
            // console.log(userEdit);
            // console.log(userEdit);
            if (userEdit.aliasx !=null) {
                console.log("userEdit")
                console.log(userEdit)
                localStorage.setItem("aliasx", JSON.stringify(userEdit.aliasx));
                localStorage.setItem("name", JSON.stringify(userEdit.name));
                localStorage.setItem("document", JSON.stringify(userEdit.document));
                window.location.href = `${process.env.PUBLIC_URL}/perfil`;
            } else {
                toast.warning(userEdit.data.error);
                console.log(userEdit)
                localStorage.removeItem("aliasx");
                localStorage.removeItem("name");
                localStorage.removeItem("document");
            }
        } catch (error) {

        }
    };

    return (
        <>

            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h2" color="primary">LOGIN</Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* <form> */}
            <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Usuario Login"
                        margin="normal"
                        name="usuarioLogin"
                        type="text"
                        value={usuarioLogin}
                        onChange={(e) => setUsarioLogin(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
            </Grid>
       
            {/* <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={12}>
                    <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        name="password"
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        inputProps={{}}
                    />
                   

                </Grid>
            </Grid> */}


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
                        Iniciar Sesión
                    </Button>
                </AnimateButton>
            </Box>

        </>
    );
};

export default FirebaseLogin;
