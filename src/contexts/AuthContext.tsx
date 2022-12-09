import { createContext, FC, useState, useEffect } from 'react';
import Cookies from 'universal-cookie'

import { IAuthContext, IChildren, IDataUsuario } from "../interfaces";

const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC<IChildren> = ({ children }): JSX.Element => {
  const [auth, setAuth] = useState({} as IDataUsuario);
  const [cargando, setCargando] = useState<boolean>(true);

  const cookies = new Cookies()

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = cookies.get('token')
      if(!token){
          setCargando(false)
          return
      }
      setAuth({token} as IDataUsuario)
      setCargando(false)
  }
  autenticarUsuario()
},[])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
