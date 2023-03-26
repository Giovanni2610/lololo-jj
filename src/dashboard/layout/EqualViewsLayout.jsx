import { Box, Grid } from '@mui/material'
import React from 'react'
/* Layout para las vistas que se ven iguales dentro del dashboard */
export const EqualViewsLayout = ({children1, children2, children3, children4}) => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        sm: 'row'
      },
      width: '100%',
      height: {
        xs: '100%',
        sm: '100%'
      },
    }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        width: '100%',
        height: '100vh',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
          },
          width: '100%',
          height: '100%'
        }}>
        <Grid
          item
          sx={{
            p: 0.5,
            width: '100%',
            height: '100px',
          }}
        >
          <Grid
            item
            className="container-custom animated_view_component"
            sx={{
              p: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '100px',
              borderRadius: '15px'
            }}
          >
            {children1}
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            height: '100%'
          }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              p: 1
            }}>
            <Grid item className="animated_view" sx={{
              display: 'flex',
              width: '100%',
              height: '30%',
              borderRadius: '15px',
            }}>
              <Grid item className="container-custom" sx={{
                pr: 1,
                width: '50%',
                height: '100%',
                borderRadius: '15px'
              }}>
                <Grid
                  item
                  className=""
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                >
                  {children2}
                </Grid>
              </Grid>
              <Grid item className="" sx={{
                pl: 1,
                width: '50%',
                height: '100%',
                borderRadius: '15px'
              }}>
                <Grid
                  item
                  className="container-custom"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px'
                  }}
                >
                  {children3}
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="container-custom animated_view animated_view_component-3" sx={{
              width: '100%',
              height: '77%',
              borderRadius: '15px',
              mt: 2
            }}>
              {/* Ventas table viewer */}
              {children4}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}
