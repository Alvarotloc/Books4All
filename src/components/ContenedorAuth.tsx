import { Outlet, useLocation } from "react-router-dom"

const ContenedorAuth = ():JSX.Element => {
    const {pathname} = useLocation();
    const DICCIONARIO_RUTAS = {
        "/": 'Inicio de Sesión',
        "/registro": 'Registrar Usuario',
        "/olvide-password": 'Olvidé mi Contraseña',
    };
    document.title = DICCIONARIO_RUTAS[pathname as keyof typeof DICCIONARIO_RUTAS];
  return (
    <section className="min-h-screen flex flex-col justify-center items-center space-y-10">
        <h1 className="font-bold text-3xl text-center">{DICCIONARIO_RUTAS[pathname as keyof typeof DICCIONARIO_RUTAS]}</h1>
        <Outlet />
    </section>
  )
}

export default ContenedorAuth