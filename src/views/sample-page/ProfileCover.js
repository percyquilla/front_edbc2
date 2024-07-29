import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { ApiPost , ApiGet} from '../../service/serviceApi';
// utils
// import cssStyles from '../../../../utils/cssStyles';
// hooks
import useAuth from './useAuth';
// components
import MyAvatar from './MyAvatar';
import Image from './Image';
import EarningIcon from 'assets/images/header-background-new.png'
import { sizeHeight } from '@mui/system';
import TotalIncomeLightCard from '../dashboard/Default/TotalIncomeDarkCard';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    // ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  // display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

// ProfileCover.propTypes = {
//   myProfile: PropTypes.object,
// };

const ProfileCover = ({ ...others }) => {
  const { user } = useAuth();
  const namee = JSON.parse(localStorage.getItem('name'));
  const aliasx = JSON.parse(localStorage.getItem('aliasx'));

  const [monto, setMonto] = useState(0);
console.log(aliasx)


useEffect(() => {
  fechPhofile("")
}, []);

const fechPhofile = async () => {
  // const userEdit = await ApiGet('/obtener-cuentas', {});
  const userEdit = await ApiGet('/usuarios/'+aliasx, {});
  setMonto(userEdit.saldo);
  console.log(userEdit.saldo);
  // setTodosCuentas(userEdit)
  // console.log(userEdit.cuentas);

};


  return (
    <RootStyle>
      <InfoStyle>
        <MyAvatar
          sx={{
            mx: 'auto',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'common.white',
            width: { xs: 80, md: 128 },
            height: { xs: 80, md: 128 },
          }}
        />
        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            // color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h4">{user?.displayName}</Typography>
          <Typography variant="h6" color="primary">
          {namee.toUpperCase()}
                                        </Typography>
                                        <br/>
          <TotalIncomeLightCard cuenta={'nombreS'} monto={monto}></TotalIncomeLightCard>
        </Box>
      </InfoStyle>
      <Image alt="profile cover" src={EarningIcon} sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} styled={{sizeHeight :50}}/>
    {/* saldo */}
    </RootStyle>
  );

}
export default ProfileCover;

// export default function ProfileCover() {
//   }
