import { Grid, Typography } from "@mui/material"
import { HorizontalBarChart } from "../charts/components/HorizontalBarChart"

export const Invoices = ({textcolor}) => {
    return (
        <>
            <Typography sx={{ p: 2, fontWeight: 'bold' }} variant="h5">
                Invoices
            </Typography>
            <Grid item sx={{ pl: 2 }} alignItems="center" display="flex" justifyContent="space-between">
                <Typography sx={{ color: textcolor, fontWeight: 'bold', fontSize: '15px' }} variant="p">
                    $555.555.555
                </Typography>
                <Typography sx={{ fontWeight: 'bold', pr: 25, fontSize: '10px' }} variant="p">
                    LAST 365 DAYS
                </Typography>
            </Grid>

            <Grid display="flex" justifyContent="space-between">
                <Grid>
                    <Typography variant="h5" sx={{ color: 'orange', pl: 2, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $111.111.111
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', pl: 2, fontWeight: 'bold', fontSize: '15px' }}>
                        OVERDUE
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" sx={{ color: '#d5d7dd', pr: 2, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $333.333.333
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', ml: 4, fontWeight: 'bold', fontSize: '15px' }}>
                        NOT DUE YET
                    </Typography>
                </Grid>
            </Grid>
           <Grid sx={{ pl: 2, pr: 2 }}>
                <HorizontalBarChart 
                    color={'orange'}
                    secondColor={'#d5d7dd'}
                    value={300}
                    secondValue={1000}
                />
            </Grid>
            <Grid item sx={{ mt: 3, alignItems: 'center', display: 'flex', pl: 2 }}>
                <Typography variant="p" sx={{fontWeight: 'bold', fontSize: '15px' }}>
                    $444.444.444
                </Typography>
                <Typography variant="p" sx={{fontWeight: 'bold', pl: 2, fontSize: '11px' }}>
                    LAST 365 DAYS
                </Typography>
            </Grid>
            <Grid item display="flex" justifyContent="space-between">
                <Grid >
                    <Typography variant="h5" sx={{ color: '#7bd200', pl: 2, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $555.555.555
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', pl: 2, fontWeight: 'bold', fontSize: '15px' }}>
                        NOT DEPOSITED
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" sx={{ color: '#2ba01d', pr: 2, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $1.111.111
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', ml: 3, fontWeight: 'bold', fontSize: '15px' }}>
                        DEPOSITED
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{ pl: 2, pr: 2 }}>
                <HorizontalBarChart 
                    color={'#7bd200'} 
                    secondColor={'#2ba01d'} 
                    value={500} 
                    secondValue={300} 
                />
            </Grid>
        </>
    )
}
