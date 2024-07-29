import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import logo from 'assets/images/bcb-header_high_res.svg';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    return (
        <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
           <img style={ {
            width: '200px',
            padding: '40px',
            display: 'block',
            margin: '5px auto'
          }} src={logo} alt="" />  
        </ButtonBase>
    );
};

export default LogoSection;
