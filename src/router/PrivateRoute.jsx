import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

//Ruta privada: 
export const PrivateRoute = ({children}) => {

 const {logged} = useContext(AuthContext)
 const {pathname} = useLocation()
 const lastPath = pathname

 localStorage.setItem('lastPath', lastPath)

 return (logged)
  ? children
  : <Navigate to='/login'/>
}
