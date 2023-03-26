import { Box } from "@mui/system"
import { ThemeCustomProvider } from "../../context/ThemeCustomProvider"
import { NavBar } from "../components/NavBar"
import { SirdeBar } from "../components/SirdeBar"

const drawerWidth = 270

export const DashBoardLayout = ({ children }) => {

  return (
    <ThemeCustomProvider>
      <Box sx={{ display: 'flex', backgroundColor: 'primary.main', color: 'textcolor.main' }}>
        <NavBar />
        <SirdeBar drawerWidth={drawerWidth} />
        <Box
          component='main'
          sx={{
            flexGrow: 1, p: 2, mt: 5,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeCustomProvider>
  )
}
