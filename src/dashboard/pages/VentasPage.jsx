import { useDarkMode } from "../../hooks/useDarkMode"
import { DashBoardLayout } from "../layout/DashBoardLayout"
import { VentasView } from "../views/views"

export const VentasPage = () => {

  return (
    <DashBoardLayout>
      <VentasView />
    </DashBoardLayout>
  )
}
