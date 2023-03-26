import { Box, Drawer, Grid, List } from "@mui/material"
import { DashboArdButtons } from "./DashboArdButtons"

// Hola, soy un componente que se encarga de renderizar el sidebar de la aplicacion
 
export const SirdeBar = ({drawerWidth = 240}) => {

  return (
    <Box
      component='nav'
      sx={{
        width: {
          xs: 0,
          sm: drawerWidth
        },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="persistent"
        open
        sx={{
          display: { xs: `none`, sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Grid
          item
          sx={{
            mt:'15%',
            p: 2
          }}
        >
          <Grid
            item
            className="container-custom"
            sx={{
              backgroundColor: '',//'#1e4f78',
              borderRadius: '20px'
            }}
          >
            <List>
              <DashboArdButtons />
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  )
}
