import { Grid, Typography } from "@mui/material"
import { HorizontalBarChart } from "../charts/components/HorizontalBarChart"

export const VentasFirstContainer = () => {

    return (
        <Grid className="animated_view_component" sx={{
            p: 2,
            borderRadius: '15px',
            width: '100%',
            height: '100%'
        }}>
            <Grid item alignItems="center" display="flex" justifyContent="flex-start" sx={{mt: 5}}>
                <Typography sx={{ color: 'textcolor.main', fontWeight: 'bold', fontSize: '15px' }} variant="p">
                    $555.555.555
                </Typography>
                <Typography sx={{ ml: '10px', color: '#b2b7c1', fontWeight: 'bold', pr: 25, fontSize: '10px' }} variant="p">
                    LAST 365 DAYS
                </Typography>
            </Grid>
            <Grid display="flex" justifyContent="space-between">
                <Grid>
                    <Typography variant="h5" sx={{ color: 'orange', pl: 0, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $111.111.111
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', pl: 0, fontWeight: 'bold', fontSize: '15px' }}>
                        OVERDUE
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" sx={{ color: '#d5d7dd', pr: 0, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $333.333.333
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', ml: 4, fontWeight: 'bold', fontSize: '15px' }}>
                        NOT DUE YET
                    </Typography>
                </Grid>
            </Grid>
            {/* Graphic */}
            <Grid sx={{ pl: 0, pr: 0 }}>
                <HorizontalBarChart
                    color={'orange'}
                    secondColor={'#d5d7dd'}
                    value={300}
                    secondValue={1000}
                />
            </Grid>
        </Grid>
    )
}
