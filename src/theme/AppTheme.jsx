import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/system"
import { useEffect, useState } from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import { ColorModeContext, useMode } from "./botficoAppTheme"
import { botficoAppTheme } from "./botficoDarkTheme"

export const AppTheme = ({ children }) => {
  const { checked } = useDarkMode()
  const [theme, colormode] = useMode()

  return (
    <ColorModeContext.Provider value={colormode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
