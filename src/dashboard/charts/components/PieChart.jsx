import { Grid } from "@mui/material"
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js'

import { Pie } from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Filler,
)

export const PieChart = () => {
  
  const data = {
    labels: ['one', 'two', 'three'],
    datasets: [
        {
            data: [3,6,9],
            backgroundColor: ['#03c1bf', '#15efe9', '#028380',]
        }
    ]
  } 

  const options = {}
    
  return (
    <Grid display="flex" justifyContent="center" alignItems="center" sx={{
            p: 3,
            width: '100%',
            height: '300px'
        }}
    >
        <Pie
            data={data}
            options={options}
        >

        </Pie>
    </Grid>
  )
}
