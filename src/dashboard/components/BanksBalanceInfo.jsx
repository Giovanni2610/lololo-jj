import { Button, Grid, Typography } from "@mui/material"
import { BankLineChart } from "../charts/components/BankLineChart"

export const BanksBalanceInfo = ({name, button}) => {
    return (
        <Grid
            item
            className="container-custom"
            sx={{
                borderRadius: '15px',
                width: '100%',
                height: '100%',
            }}
        >
            <Typography variant="h6" sx={{
                fontWeight: 'bold',
                p: 2,
            }}>
                {name}
            </Typography>
            <Grid item sx={{
                p: 2,
                display: 'flex',
                width: '100%',
                height: '50px',
                justifyContent: 'space-between',
            }}>
                <Button variant="contained" sx={{
                    p: 2,
                    width: '170px',
                    height: '50px',
                    backgroundColor: '#4BCEA4'
                }}>
                    {button}
                </Button>
                <Typography variant="p" sx={{fontWeight: 'bold', color: 'textcolor.main'}}>Balance sobre GL</Typography>
                <Typography variant="p" sx={{fontWeight: 'bold', color: 'textcolor.secondary'}}>$111.111.111</Typography>
            </Grid>
            <Grid
                item
                sx={{
                    mt: 3,
                    p: 2,
                    width: '100%',
                    height: '200px'
                }}
            >
                <BankLineChart />
            </Grid>
        </Grid>
    )
}
