import { createContext, useState, useEffect } from 'react';
import type { IChildren, AlertaProps } from '../interfaces/index';

const AlertaContext = createContext<any>({});

const AlertaProvider = ({children}:IChildren) => {
    const [alerta, setAlerta] = useState<AlertaProps>({
        error: false,
        mensaje: "",
      });
      const { mensaje } = alerta;
      useEffect(() => {
        if (mensaje) {
          setTimeout(() => {
            setAlerta({ error: false, mensaje: "" });
          }, 2000);
        }
      }, [alerta]);
  return (
    <AlertaContext.Provider value={{
        alerta,
        setAlerta,
    }}>{children}</AlertaContext.Provider>
  )
}
export { AlertaProvider };
export default AlertaContext