import { useState } from "react";
import Alerta from "../../components/Alerta";
import { Link } from "react-router-dom";
import useAlerta from '../../hooks/useAlerta';
import { ContextAlerta } from '../../interfaces/index';
const OlvidePassword = ():JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const {alerta,setAlerta}:ContextAlerta = useAlerta();
    const { mensaje, error } = alerta;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if ([email].includes("")) {
        return setAlerta({
          error: true,
          mensaje: "Ingrese un email válido",
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
      <input
        type="submit"
        value="Recuperar Contraseña"
        className="bg-blue-500 text-white  font-bold w-full py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors"
      />
    </fieldset>
    <div className="w-full flex justify-between mt-5">
    <Link to="/" className="text-xs hover:underline text-left">
        ¿Ya tienes cuenta? Inicia sesión
      </Link>
      <Link to="/registro" className="text-xs hover:underline text-left">
        ¿No tienes cuenta? Crea una
      </Link>
    </div>
  </form>
  )
}

export default OlvidePassword