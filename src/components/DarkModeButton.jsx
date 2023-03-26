import * as React from 'react'
import { Grid, IconButton } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import ProfileUser from './ProfileUser'
import { useDarkMode } from '../hooks/useDarkMode'

export const DarkModeButton = () => {

    const {enable, theme} = useDarkMode()

    return (
        <Grid item display='flex' justifyContent='space-evenly' alignItems='center' sx={{p: 2, width: '100%'}} >
            <Grid item className='box-shadow' display='flex' justifyContent='center' alignItems='center' sx={{
                mr: 1,
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                backgroundColor: '#0c416b'
            }}
            >
                <IconButton onClick={enable}>
                    {theme.palette.mode === 'dark' ? 
                    (<DarkMode sx={{color: '#fff'}} />) 
                    : 
                    (<LightMode sx={{color: '#D4DA52'}} />)}
                </IconButton>
            </Grid>
            <ProfileUser />
        </Grid>
    )
}
