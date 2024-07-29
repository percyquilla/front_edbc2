// material-ui
import { styled } from '@mui/material/styles';
import { Typography,Card, Box ,Tabs, Tab, Grid, useMediaQuery, Divider, CardHeader} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import useTabs from './useTabs';
import ProfileCover from './ProfileCover';
import Transferencia from './Transferir'
// import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalIncomeLightCard from '../dashboard/Default/EarningCard';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
    zIndex: 9,
    bottom: 0,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      paddingRight: theme.spacing(3),
    },
  }));
  

const PROFILE_TABS = [
    {
      value: 'perfil',
    //   icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
    //   component: <Profile myProfile={_userAbout} posts={_userFeeds} />,
      component: 
      <Card
      sx={{
        mb: 3,
        height: 274,
        position: 'relative',
      }}
    >
      {/* <ProfileCover /> */}
      <TotalIncomeLightCard cuenta={'nombreS'} monto={"monto"}></TotalIncomeLightCard>
    
    </Card>
       ,
    },
    {
      value: 'Transferencia',
    //   icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
    //   component: <ProfileGallery gallery={_userGallery} />,
      component: <Grid container alignItems="center" justifyContent="center" item xs={12} sm={12}>
        <Transferencia />
      </Grid> ,
    },
  ];

  export default function SamplePage() {

      const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const aliasx = JSON.parse(localStorage.getItem('aliasx'));
    console.log(aliasx)
    if(aliasx===null){
      localStorage.removeItem("aliasx");
      localStorage.removeItem("name");
      localStorage.removeItem("document");
      window.location.href = `${process.env.PUBLIC_URL}/pages/login/login3`;
    }

    const { currentTab, onChangeTab } = useTabs('perfil');


    return    <MainCard title="Bolivianos Electronicos">
      <br/>
    <Card
       sx={{
         mb: 3,
         height: 50,
         position: 'relative',
       }}
     >
       {/* <ProfileCover /> */}

          <TabsWrapperStyle>     
              <Grid item xs={12} sm={12}>        
                  <Tabs
                  allowScrollButtonsMobile
                  variant="scrollable"
                  scrollButtons="auto"
                  value={currentTab}
                  onChange={onChangeTab}
                  >
                  {PROFILE_TABS.map((tab) => (
                    <Tab disableRipple key={tab.value} value={tab.value} icon={tab.icon} label={tab.value} />
                  ))}
                  </Tabs>
              </Grid>
          </TabsWrapperStyle>

      
     </Card>

     {PROFILE_TABS.map((tab) => {
       const isMatched = tab.value === currentTab;
       return isMatched && <Box key={tab.value}>{tab.component}</Box>;
     })}
 </MainCard>;
  }

// const SamplePage = () => (
 
// );

// export default SamplePage;
