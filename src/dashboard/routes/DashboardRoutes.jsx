import { Navigate, Route, Routes } from "react-router-dom"
import { EmpresaPage } from "../pages/EmpresaPage"
import {
  VentasPage,
  DashboardPage,
  ContabilidadPage,
  ComprasPage,
  BancosPage,
  InventariosPage,
  ReportesPage,
  ClienteProveedorPage,
  ConfiguracionPage

} from "../pages/pages"

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashboardPage />} />

      <Route path="/ventas" element={<VentasPage />} />

      <Route path="/compras" element={<ComprasPage />} />

      <Route path="/bancos" element={<BancosPage />} />

      <Route path="/contabilidad" element={<ContabilidadPage />} />

      <Route path="/inventarios" element={<InventariosPage />} />

      <Route path="/reportes" element={<ReportesPage />} />

      <Route path="/proveedores" element={<ClienteProveedorPage />} />

      <Route path="/configuracion" element={<ConfiguracionPage />} />

      <Route path="/empresa" element={<EmpresaPage />} />
  
      <Route path="/*" element={<Navigate to="dashboard/*" />} />

    </Routes>
  )
}
