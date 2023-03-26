import { ArrowDropDown } from '@mui/icons-material'
import { Button, Divider, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../helpers/exampleDataTable'

const column = [
  ...columns,
  {
    field: 'status',
    headerName: 'Status',
    width: '200',
    sortable: false,
    renderCell: () => {
      return <Typography variant='p' sx={{
        fontWeight: 'bold',
        color: 'orange',
        cursor: 'pointer'
      }}>Overdue 10 days (not sent)</Typography>
    }
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    sortable: false,
    renderCell: () => {
      return <Button variant="outlined" sx={{
        borderColor: '#1e4f78',
        color: 'textcolor.main'
      }}>
        Receive payment
        <ArrowDropDown />
      </Button>;
    },
  },
];

export const VentasTableViewer = () => {
  return (
    <Box sx={{ height: '300px', width: '100%' }}>
      <Grid item sx={{
        p: 2,
        alignItems: 'center',
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button variant='outlined' sx={{
          color: 'textcolor.main',
          borderColor: 'textcolor.main'
        }}>
          Batch functions
          <ArrowDropDown />
        </Button>
        <Button variant='contained' sx={{
          backgroundColor: 'green',
          color: '#fff'
        }}>
          NEW INVOICE
        </Button>
      </Grid>
      <Divider />
      <DataGrid
        rows={rows}
        columns={column}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
