import { useDarkMode } from "../../hooks/useDarkMode"
import { DashBoardLayout } from "../layout/DashBoardLayout"
import { DashboardView } from '../views/views'

export const DashboardPage = () => {

  const {textcolor, secondary} = useDarkMode()

  return (
    <DashBoardLayout>
      <DashboardView textcolor={textcolor} secondary={secondary} />
    </DashBoardLayout>
  )
}
