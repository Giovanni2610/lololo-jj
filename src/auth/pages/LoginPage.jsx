import { Google } from "@mui/icons-material"
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useTheme } from "@mui/material"
import { tokens } from "../../theme/botficoAppTheme"

export const LoginPage = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('admin')
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <AuthLayout title="Login">
      <form>
        <Grid container >
          <Grid item xs={12} sx={{
            marginTop: 2,
          }}>
            <TextField
              sx={{ color: 'textcolor.main' }}
              label="Correo"
              type="email"
              placeholder="Ingresa tu email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              sx={{ color: 'textcolor.main' }}
              label="Contraseña"
              type="password"
              placeholder="********"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button onClick={onLogin} variant="contained" fullWidth sx={{ color: 'textcolor.main' }}>
                Login
              </Button>
            </Grid  >
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
