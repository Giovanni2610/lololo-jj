import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { BanksBalanceInfo } from "../components/BanksBalanceInfo"

// Data example
export const BancosView = () => {

  const bankDataExample = [
    {
      name: 'Banco de Chile',
      button: 'Sincronización en linea'
    },
    {
      name: 'Banco Santander',
      button: 'Conciliar 1 asientos'
    },
    {
      name: 'Banco Santander euro',
      button: 'Sincronización en linea',
    },
    {
      name: 'Caja',
      button: 'Nueva transacción'
    }
  ]

  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          item
          className="animated_container"
          sx={{
            p: 1,
            width: '50%',
            height: '100%'
          }}
        >
          {/* BankBalanceInfo */}
          <BanksBalanceInfo name={bankDataExample[0].name} button={bankDataExample[0].button} />
        </Grid>
        <Grid
          item
          className="animated_view_component"
          sx={{
            p: 1,
            width: '50%',
            height: '100%'
          }}
        >
          {/* BankBalanceIndfo */}
          <BanksBalanceInfo name={bankDataExample[1].name} button={bankDataExample[1].button} />
        </Grid>
      </Box>
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          item
          className="animated_view_component-2"
          sx={{
            p: 1,
            width: '50%',
            height: '100%'
          }}
        >
          {/* BankBalanceInfo */}
          <BanksBalanceInfo name={bankDataExample[2].name} button={bankDataExample[2].button} />
        </Grid>
        <Grid
          item
          className="animated_view_component-3"
          sx={{
            p: 1,
            width: '50%',
            height: '100%'
          }}
        >
          {/* BankBalanceInfo */}
          <BanksBalanceInfo name={bankDataExample[3].name} button={bankDataExample[3].button} />
        </Grid>
      </Box>
    </Box>
  )
}
