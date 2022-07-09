import {  useState } from "react";
import Alerta from "../../components/Alerta";
import { Link } from "react-router-dom";
import { ContextAlerta } from '../../interfaces/index';
import useAlerta from '../../hooks/useAlerta';
const Registro = ():JSX.Element => {
    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmarPassword, setConfirmarPassword] = useState<string>('');
    const {alerta,setAlerta}:ContextAlerta = useAlerta();
    const { mensaje, error } = alerta;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if ([nombre,email, password,confirmarPassword].includes("")) {
        return setAlerta({
          error: true,
          mensaje: "Todos los campos son obligatorios",
        });
      }
      if(password !== confirmarPassword){
        return setAlerta({
          error: true,
          mensaje: "Las contraseñas no coinciden",
        });
      }
    };
  return (
    <form
    className="bg-white rounded-md p-5 w-5/6 md:w-3/6 lg:w-5/12 xl:w-4/12"
    onSubmit={handleSubmit}
  >
    {mensaje && <Alerta error={error} mensaje={mensaje} />}
    <fieldset className="space-y-5">
      <div className="flex flex-col">
        <label htmlFor="nombre" className="font-semibold mb-2">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese su email"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="font-semibold mb-2">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese su contraseña"
          className="border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmar" className="font-semibold mb-2">
          Confirmar Contraseña
        </label>
        <input
          type="confirmar"
          name="confirmar"
          id="confirmar"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
          placeholder="Confirme su contraseña"
          className="border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>
      <input
        type="submit"
        value="Crear Cuenta"
        className="bg-blue-500 text-white  font-bold w-full py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors"
      />
    </fieldset>
    <div className="w-full flex justify-between mt-5">
      <Link to="/" className="text-xs hover:underline text-left">
        ¿Ya tienes cuenta? Inicia sesión
      </Link>
      <Link to="/olvide-password" className="text-xs hover:underline text-right">
        Olvidé mi contraseña
      </Link>
    </div>
  </form>
  )
}

export default Registro