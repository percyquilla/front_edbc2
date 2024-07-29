import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets
// assets
// import EarningIcon from 'assets/images/bcb-header_high_res.svg'
import BcbImage from '../../../../assets/images/bcb-header_high_res.svg'

// ================================|| AUTH3 - LOGIN ||================================ //
import logo from 'assets/images/bcb.png';
const Login = () => {
    const theme = useTheme();
    // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                       
                                    <img style={ {
            width: '200px',
            padding: '30px',
            display: 'block',
            margin: '5px auto'
          }} src={logo} alt="" />  
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                   
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
