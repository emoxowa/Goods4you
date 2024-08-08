import { Outlet } from 'react-router-dom'

export const Layout = (): JSX.Element => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  )
}
