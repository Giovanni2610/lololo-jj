import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export const ProductSelect = ({data, name}) => {
  return (
    <FormControl sx={{
      width: '100%'
    }}>
      <InputLabel>
        {name}
      </InputLabel>
      <Select>
        {data.map(({name}) => (
          <MenuItem>
            {name}
          </MenuItem>  
        ))}
      </Select>
    </FormControl>
  )
}
