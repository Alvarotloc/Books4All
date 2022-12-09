import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';


import { Alerta } from "../../components";
import { IAlerta, IDataUsuario } from "../../interfaces";
import useAuth from '../../hooks/useAuth';

export const Login: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alerta, setAlerta] = useState<IAlerta>({} as IAlerta);

  const navigate = useNavigate()

  const {setAuth, auth,cargando} = useAuth()

    useEffect(() => {
        if(!cargando){
            if(Object.keys(auth).length > 0){
                navigate('/')
            }
        }
    },[cargando])

  useEffect(() => {
    if(alerta.msg){
        setTimeout(() => {
            setAlerta({} as IAlerta)
        }, 2500);
    }
  },[alerta])



  const cookies = new Cookies();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      return setAlerta({
        error: true,
        msg: "Todos Los Campos Son Obligatorios",
      });
    }
    const {data}:{data:IDataUsuario} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/usuarios/login`,{email,password})
    cookies.set('token',data.token,{path:'/',expires : new Date(Date.now()+86400000)})
    setAuth(data)
    navigate('/')
  };

  return (
    <section className="space-y-10 w-full lg:w-1/2 flex flex-col items-center px-5">
      <h1 className="text-4xl text-center md:text-left md:text-6xl font-black capitalize">
        Inicia sesión y{" "}
        <span className="text-green-700 block">sumérgete en la lectura</span>
      </h1>
      {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg}/>}
      <form className="bg-white rounded-md p-10 w-full shadow-md" onSubmit={handleLogin}>
        <fieldset className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Tu Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese aquí su email"
              className="bg-slate-50 p-2 rounded border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-bold">
              Tu Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese aquí su contraseña"
              className="bg-slate-50 p-2 rounded border"
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="py-2 rounded bg-green-600 hover:bg-green-700 transition-colors cursor-pointer text-white w-full font-bold uppercase"
          />
        </fieldset>
      </form>
    </section>
  );
};
