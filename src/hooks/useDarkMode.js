import { useTheme } from "@emotion/react"
import { useContext, useState } from "react"
import { ColorModeContext } from "../theme/botficoAppTheme"

// Controla el estado del boton dark mode...
export const useDarkMode = () => {

  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [selectedMode, setSelectedMode] = useState(localStorage.getItem('mode'))

  const enable = () => {
    colorMode.toggleColorMode()
    setSelectedMode(localStorage.getItem('mode'))
  }

  return {
    enable,
    theme
  }
}
