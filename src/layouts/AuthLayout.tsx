import { FC } from "react"
import { Outlet } from "react-router"

export const AuthLayout:FC = ():JSX.Element => {
  return (
    <main className="my-10 flex justify-center">
        <Outlet />
    </main>
  )
}
