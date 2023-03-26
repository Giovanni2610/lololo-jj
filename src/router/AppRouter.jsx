import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { ProductRoutes } from "../productos/routes/ProductRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <Routes>
      {/*Contiene la ruta del login*/}
      <Route path="login/*" element={
        <PublicRoute>
          <AuthRoutes />
        </PublicRoute>
      } />
      {/*Contiene la ruta de la app principal*/}
      <Route path="/*" element={
        <PrivateRoute>
          <DashboardRoutes />
        </PrivateRoute>
      } />
      <Route path="/productos" element={
        <PrivateRoute>
          <ProductRoutes />
        </PrivateRoute>
      }/>
    </Routes>
  )
}
