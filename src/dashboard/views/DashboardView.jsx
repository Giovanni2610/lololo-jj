import { useTheme } from "@mui/material"
import { Box, Grid } from "@mui/material"
import { useDarkMode } from "../../hooks/useDarkMode"
import { tokens } from "../../theme/botficoAppTheme"
import { BankAccount } from "../components/BankAccount"
import { ExpensesDashboard } from "../components/ExpensesDashboard"
import { Invoices } from "../components/Invoices"
import { ProfitLoss } from "../components/ProfitLoss"
import { Sales } from "../components/Sales"

export const DashboardView = ({texcolor, secondary}) => {


  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        width: '100%',
        height: {
          xs: '100%',
          sm: '100%'
        },
      }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        width: '100%',
        height: '97vh',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
          },
          width: '100%', 
          height: '100%',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            height: '100%'
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="container-custom animated_view_component" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px', //cambiar color
                //backgroundColor: colors.lightblue.default
              }}>
                <Invoices textcolor={texcolor} secondary={secondary} />
              </Grid>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="container-custom animated_view_component-2" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                //backgroundColor: colors.lightblue.default
              }}>
                <ExpensesDashboard textcolor={texcolor} />
              </Grid>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            height: '100%',
          }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="container-custom animated_view_component-3" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                //backgroundColor: colors.lightblue.default
              }}>
                <ProfitLoss textcolor={texcolor} />
              </Grid>
            </Box>
            <Box sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
              <Grid item className="container-custom animated_view_component-4" sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                //backgroundColor: colors.lightblue.default
              }}>
                <Sales textcolor={texcolor} secondary={secondary} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        direction: {
          xs: 'column',
          sm: 'row'
        },
        width: {
          xs: '100%',
          sm: '35%'
       },
        height: '100%',
        p: 1
      }}>
        <Grid item className="container-custom animated_view_component-5" sx={{
          width: '100%',
          height: '100%',
          borderRadius: '15px',
          //backgroundColor: colors.lightblue.default
        }}>
          <BankAccount />
        </Grid>
      </Box>
    </Box>
  )
}
