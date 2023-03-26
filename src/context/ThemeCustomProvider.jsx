import { useDarkMode } from "../hooks/useDarkMode"
import { ThemeContext } from "./ThemeContext"

export const ThemeCustomProvider = ({children}) => {

  const {primary, state, textcolor} = useDarkMode()

  return (
    <ThemeContext.Provider value={{
        state,
        primary: primary,
        textcolor: textcolor
    }}>
        {children}
    </ThemeContext.Provider>
  )
}
