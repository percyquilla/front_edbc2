import { useEffect, useState } from 'react';
// import AutoReload from '../AutoReload';

// material-ui
import { Grid , Typography} from '@mui/material';

// import { ApiPost } from 'services/serviceApi';
import { ApiPost , ApiGet} from '../../../service/serviceApi';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    // const [refres, setRefre] = useState(true);
    const [todosCuentas, setTodosCuentas] = useState([]);
    const [balance, setBalance] = useState(0);
  
    useEffect(() => {

        setLoading(false);
        fechPhofile("")
        // interval();
    }, []);

    // const interval = setInterval(() => {
    //     setRefre(true)
    //   }, 2000);

    // useEffect(() => {
    //     if (UserId !== 0) {
    //       fechPhofile(UserId);
    //     } else {
    //       resetDataUser();
    //     }
    //     // eslint-disable-next-line
    //   }, [UserId]);

   
   
    // todosCuentas.push({
    //     cuenta: cuenta,
    //     monto: monto
    // });
    // todosCuentas.push({
    //     cuenta: cuenta,
    //     monto: monto
    // });

    const fechPhofile = async (UserId) => {
        // const userEdit = await ApiGet('/obtener-cuentas', {});
        const userEdit = await ApiGet('/usuarios', {});
        console.log(userEdit);
        setTodosCuentas(userEdit)
        // console.log(userEdit.cuentas);
        const saldo = await ApiGet('/balancesSC', {});
        console.log(saldo.balance);
        setBalance(saldo.balance)
      };

      setTimeout(() => {
        console.log("Hello, World!");
      }, 2000);

    return (
        // <Grid container spacing={gridSpacing}>

<Grid item xs={12}>
{/* <AutoReload /> */}

                <br/>
                <br/>
                <Typography variant="h3" color="primary">SALDO CUENTA GENESIS</Typography>
                <br/>
                <Grid item xs={12}> 
                {/* <Grid  lg={3} md={6} sm={6} xs={12}> */}
                    <TotalIncomeDarkCard cuenta={'nombreS'} monto={balance}></TotalIncomeDarkCard>
                </Grid>
                {/* </Grid> */}
                    <br/>
            <Typography variant="h4" color="primary">CUENTAS</Typography>
            <br/>
            <Grid container spacing={gridSpacing} alignItems="center">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            {
                            todosCuentas.map((cuentaActual, key) => {
                                return (
                                    <Grid item sm={6} xs={12} md={6} lg={12} key={key} >
                                    <TotalIncomeLightCard isLoading={isLoading} cuenta={cuentaActual.name} monto={cuentaActual.saldo}/>
                                </Grid>
                                   
                                )
                            })
                        }
                         
                        </Grid>
                    </Grid>
                </Grid>
            
        
        </Grid>
    );
};

export default Dashboard;
