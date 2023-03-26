import { Grid } from '@mui/material'
import HSBar from 'react-horizontal-stacked-bar-chart'

export const HorizontalBarChart = ({
  color, 
  secondColor, 
  value, 
  secondValue
}) => {
  return (
    <Grid item sx={{width: '100%'}}>
      <HSBar data={[
        {value: value, color: color},
        {value: secondValue, color: secondColor}
      ]} />
    </Grid> 
  )
}
