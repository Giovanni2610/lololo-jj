import { ArrowDropDown } from "@mui/icons-material"
import { Button } from "@mui/material"

export const Buttons = ({buttonsData}) => {

  return (
    buttonsData.map(({name}) => (
        <Button key={name} variant='text' className="animated_view_component" sx={{
          fontSize: '11px',
          color: 'textcolor.main'
        }}> 
          {name}
          <ArrowDropDown />
        </Button>
      ))
  )
}
