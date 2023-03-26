import { Navigate, Route, Routes } from "react-router-dom"
import { AddProductView } from "../views/AddProductView"

// Contiene las rutas que corresponden al mantenedor de productos
export const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AddProductView />} />
      <Route path="/productform" element={<AddProductView />} />
    </Routes>
  )
}
