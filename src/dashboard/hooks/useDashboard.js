import { useState } from "react"
import { buttonIconTextData } from "../helpers/DashboardButtonData"

export const useDashboard = () => {

  
  const [buttons] = useState(buttonIconTextData)

  const onActiveButton = (index) => {
    localStorage.setItem('active', index)
    buttons.map(e => {
        if (e.id.toString() !== localStorage.getItem('active')){
            e.active = false
        } else {
            e.active = true
        }
    })
  }

  return {
    onActiveButton,
    buttons,
  }
}
