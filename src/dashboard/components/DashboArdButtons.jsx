
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material"

import { Link } from "react-router-dom"
import Icon from '@mui/material/Icon';
import { useDashboard } from "../hooks/useDashboard";
import { DesplegableButton } from "./DesplegableButton";

export const DashboArdButtons = () => {

  const { onActiveButton, buttons } = useDashboard()

  return (
    <>
      <ListItem disablePadding sx={{ pl: 2, mt: 1 }}>
        <Typography variant="p" sx={{ color: 'textcolor.main', fontWeight: 'bolder' }}>
          Items
        </Typography>
      </ListItem>
      {
        buttons.map(({ icon, name, route, id, active, type }) => (
          type === 'acordeon'
          ?<Link to={route.toString()} className="custom-link" key={parseInt(id)}>
            <ListItem>
              <ListItemButton onClick={() => onActiveButton(id)} sx={{
                backgroundColor: active ? '#0c416b': '',
                boxShadow: active ? '0px 3px 2px rgba(0, 0, 0, 0.2)': '',
                borderRadius: 10,
                ":hover": {
                  backgroundColor: '#0c416b',
                }
              }}>
                <DesplegableButton name={name} icon={icon} active={active} />
              </ListItemButton>
            </ListItem>
           </Link>
          :<Link to={route.toString()} className="custom-link" key={parseInt(id)}>
            <ListItem>
              <ListItemButton onClick={() => onActiveButton(id)} sx={{
                backgroundColor: active ? '#0c416b' : '',
                boxShadow: active ? '0px 3px 2px rgba(0, 0, 0, 0.2)': '',
                borderRadius: 10,
                ":hover": {
                  backgroundColor: '#0c416b',
                }
              }}>
                <Icon className="custom-icon" sx={{ color: active ? '#fff' :'textcolor.main' }}>{icon.toString()}</Icon>
                <ListItemText primary={name.toString()} sx={{
                  color: active ? '#fff'  :'textcolor.main',
                  fontWeight: 'bold',
                  ml: 2,
                }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))
      }
    </>
  )
}
