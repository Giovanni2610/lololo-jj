import { useTheme } from "@mui/material"
import { Grid, Typography } from "@mui/material"
import { tokens } from "../../theme/botficoAppTheme"
import { HorizontalBarChart } from "../charts/components/HorizontalBarChart"

export const VentasSecondContainer = () => {

  
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Grid className="animated_view_component-2" sx={{
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
            <Grid item display="flex" justifyContent="space-between">
                <Grid >
                    <Typography variant="h5" sx={{ color: '#7bd200', pl: 0, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $555.555.555
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', pl: 0, fontWeight: 'bold', fontSize: '15px' }}>
                        NOT DEPOSITED
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" sx={{ color: '#2ba01d', pr: 0, mt: 2, fontWeight: 'bold', fontSize: '20px' }}>
                        $1.111.111
                    </Typography>
                    <Typography variant="p" sx={{ color: '#aba4ac', ml: 3, fontWeight: 'bold', fontSize: '15px' }}>
                        DEPOSITED
                    </Typography>
                </Grid>
            </Grid>
            {/* Graphic */}
            <Grid sx={{ pl: 0, pr: 0 }}>
                <HorizontalBarChart 
                    color={'#7bd200'} 
                    secondColor={'#2ba01d'} 
                    value={500} 
                    secondValue={300} 
                />
            </Grid>
        </Grid>

    )
}
