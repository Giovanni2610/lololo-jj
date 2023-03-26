import { ArrowDropDown } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { HorizontalBarChart } from "../charts/components/HorizontalBarChart"

export const ProfitLoss = ({ textcolor }) => {
    return (
        <>
            <Grid item display="flex" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Profit and lost
                </Typography>
                <Grid display="flex" justifyContent="space-around" alignItems="center">
                    <Typography variant="p" sx={{ color: textcolor, fontWeight: 'bold' }}>
                        Last month
                    </Typography>
                    <ArrowDropDown sx={{ color: '#b3b2b3' }} />
                </Grid>
            </Grid>
            <Grid>
                <Typography variant="h5" sx={{ pl: 2, mt: 1, fontWeight: 'bold', fontSize: '15px' }}>
                    $4.444.444
                </Typography>
                <Typography variant="p" sx={{ color: '#aba4ac', pl: 2, fontWeight: 'bold', fontSize: '11px' }}>
                    NET INCOME FOR JANUARY
                </Typography>
            </Grid>
            <Grid display="flex" justifyContent="space-around" alignItems="center" sx={{ p: 2 }}>
                <Grid sx={{ pr: 1 }} display="flex" flexDirection="column">
                    <Typography variant="p" sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                        $55.555
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        INCOME
                    </Typography>
                </Grid>
                <HorizontalBarChart color={'green'} secondColor={'#d5d7dd'} value={400} secondValue={200} />
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
                <Grid sx={{ pr: 1 }} display="flex" flexDirection="column">
                    <Typography variant="p" sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                        $66.555
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        EXPENSES
                    </Typography>
                </Grid>
                <HorizontalBarChart color={'#01a5a3'} secondColor={'#d5d7dd'} value={600} secondValue={200} />
            </Grid>
        </>
    )
}
