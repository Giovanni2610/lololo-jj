import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { ExitToApp, Person, Settings } from '@mui/icons-material';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Convertir en un modulo -->
export default function ProfileUser() {

  // Envia la orden para el log out de la app --> 
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogOut = () => {
    logout()
    navigate('/login', {
        replace: true,
    })
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        className='box-shadow'
        sx={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        B
      </Avatar>
      <Menu
        color='primary.main'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Person sx={{mr: 2}}/> Perfil
        </MenuItem>
        <MenuItem onClick={handleClose}>
           <Settings sx={{mr: 2}} /> Configuración
        </MenuItem>
        <MenuItem onClick={onLogOut}>
            <ExitToApp sx={{mr: 2}} /> Cerrar Sesión
        </MenuItem>
      </Menu>
    </div>
  );
}