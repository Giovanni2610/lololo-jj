import { Add, CheckBox } from "@mui/icons-material"
import { Box, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { categoria_producto, estado_producto, unidad_medida_producto } from "../helpers/selectData"
import { useAtributes } from "../hooks/useAtributes"
import { useForm } from "../hooks/useForm"
import { ProductSelect } from "./ProductSelect"

export const ProductsForm = () => {

  const {handleNewAtribute, handleDeleteAtribute, atribute} = useAtributes()
  const {onInputChange, onResetForm, name, atributevalue} = useForm()

  const onsubmitAtribute = (event) => {
    
    console.log(event)

    event.preventDefault()
     const newAtribute = {
       name: name,
       atribute: atributevalue,
     }
    
    console.log(atribute)
    handleNewAtribute(newAtribute)
    onResetForm()

  }

  return (
    <Box
      sx={{
        height: '100vh',
        p: 2
      }}
    >
      <Grid
        className="container-custom"
        sx={{
          width: '100%',
          height: '100%',
          p: 2
        }}
      >
        <Typography variant="h4">
          Añade un nuevo Producto
        </Typography>
        <Grid 
          className="custom-form"
          sx={{
            display: 'grid',
            width: '100%',
            height: '10%',
            p: 2,
          }}
        >
            <TextField variant="outlined" label="Codigo producto" />
            <TextField variant="outlined" label="Nombre producto" fullWidth />
        </Grid>
        <Grid
          className="custom-form"
          sx={{
            display: 'grid',
            width: '100%',
            height: '10%',
            p: 2
          }}
        >
          <ProductSelect data={estado_producto} name={'Estado'} />
          <TextField variant="outlined" label="Descripción producto" fullWidth />
        </Grid>
        <Grid
          className="custom-select-container"
          sx={{
            display: 'grid',
            width: '100%',
            height: '10%',
            p: 2,
          }}
        >
          <ProductSelect data={unidad_medida_producto} name={'Unidad de medida'} />
          <ProductSelect data={categoria_producto} name={'Categoria'} />
          <ProductSelect data={categoria_producto} name={'Impuesto'} />
        </Grid>
        <Grid
          className="custom-checkbox-container"
          sx={{
            display: 'grid',
            width: '100%',
            height: '10%',
            p: 2,
          }}
        >
          <FormControlLabel
            label="Afecto IVA"
            control={<Checkbox checked={true} />}
          />
          <FormControlLabel 
            label="Venta"
            control={<Checkbox />}
          />
          <FormControlLabel
            label="Compra"
            control={<Checkbox />}
          />
        </Grid>
        <Grid
          className="custom-atribute-container"
          sx={{
            display: 'grid',
            width: '100%',
            height: '20%',
            p: 2,
          }}
        >
          <TextField 
            variant="outlined"
            label="Nombre atributo"
            onChange={onInputChange}
            value={name}
            name="nombre"
          />
          <TextField
            variant="outlined"
            label="Atributo"
            onChange={onInputChange}
            value={atributevalue}
            name="atributo"
          />
          <IconButton sx={{mt: 0.6, ml: 2}} type="submit" onClick={onsubmitAtribute} >
            <Add />
          </IconButton>
        </Grid>
        <Grid
          className="custom-atributes"
          sx={{
            display: 'grid',
            width: '100%',
            height: '30%',
            p: 2,
          }}
        >
          {atribute.map(({name, atribute}) => (
            <Grid item>
              <Typography variant="h6">
                Atributo
              </Typography>
              <Typography fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="p">
                 {atribute}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
