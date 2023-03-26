import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Icon, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { useState } from "react";

export const DesplegableButton = ({name, icon, active}) => {

  const tasks = [
    { id: 1, title: 'Productos', completed: false },
    { id: 2, title: 'Clientes', completed: true },
    { id: 3, title: 'Proveedores', completed: false },
    
  ];
  
  const [open, setopen] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setopen(isExpanded ? panel : false);
  };
  
  return (  
    <>
      <Icon className="custom-icon" sx={{ color: active ? '#fff' : 'textcolor.main' }}>{icon.toString()}</Icon>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />} // Agregar el componente ExpandMore aquí
          sx={{
            backgroundColor: 'none',
            ":hover": {
              backgroundColor: '#0c416b',
            }
          }}
        >
          <Typography>
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {tasks.map((task) => (
              <ListItemButton key={task.id}>
                <ListItemText primary={task.title} />
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  )
}


