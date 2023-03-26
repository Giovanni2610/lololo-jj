import { ArrowDropDown } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { LineChart } from "../charts/components/LineChart"

export const Sales = ({textcolor, secondary}) => {
    return (
        <>
            <Grid item display="flex" justifyContent="space-between" alignItems="center" 
                sx={{ 
                  p: 2, 
                }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Sales
                </Typography>
                <Grid display="flex" justifyContent="space-around" alignItems="center">
                    <Typography variant="p" sx={{ color: textcolor, fontWeight: 'bold' }}>
                        Last month
                    </Typography>
                    <ArrowDropDown sx={{color: '#b3b2b3'}} />
                </Grid>
            </Grid>
            <Grid>
                <Typography variant="h5" sx={{ pl: 2, mt: 1, fontWeight: 'bold', fontSize: '15px' }}>
                    $6.666.666
                </Typography>
                <Typography variant="p" sx={{ color: '#aba4ac', pl: 2, fontWeight: 'bold', fontSize: '11px' }}>
                    LAST MONTH
                </Typography>
            </Grid>
            <Grid>
                <LineChart textcolor={textcolor} />
            </Grid>
        </>
    )
}
