import { Grid } from '@mui/material'

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'
import { useState } from 'react'

import { Line } from 'react-chartjs-2'
import { useDarkMode } from '../../../hooks/useDarkMode'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
)

export const LineChart = ({textcolor}) => {
  const {state} = useDarkMode()
  const [first, setfirst] = useState(false)

  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Mon'],
    datasets: [
        {
            label: 'Ventas de la semana',
            data: [6,3,9,1],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
            fill: true,
            tension: 0.4,
        }
    ]
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#818181',
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#818181'
        }
      },
      y: {
        ticks: {
          color: '#818181'
        }
      }
    }
  }

  return (
    <Grid display="flex" justifyContent="center" alignItems="center" sx={{
        width: '100%',
        height: '150px',
    }}>
        <Line
            data={data}
            options={options}
        >
        </Line>
    </Grid>
  )
}
