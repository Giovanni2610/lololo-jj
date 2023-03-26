import { Divider, Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Grid
        item
        className="animated_container"
        xs={3}
        sx={{
          width: {md: 450},
          backgroundColor: 'primary.main',
          padding: 3,
          borderRadius: 2,
        }}
      >
       <Grid container direction="row" alignItems="center">
        <Grid container sx={{width: 5, height: 50, backgroundColor: 'textcolor.main', borderRadius: 10}}>
        </Grid>
        <Typography variant="h2" sx={{fontWeight: 'bold', color: 'textcolor.main'}}>
          {title}
        </Typography>
       </Grid>
        <Divider sx={{marginTop: 1, backgroundColor: 'primary.main'}} />
          {children}
      </Grid>
    </Grid>
  )
}
