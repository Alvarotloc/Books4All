import { FC } from "react";

export const Login: FC = (): JSX.Element => {
  return (
    <section className="space-y-10 w-full lg:w-1/2 flex flex-col items-center px-5">
      <h1 className="text-4xl text-center md:text-left md:text-6xl font-black capitalize">
        Inicia sesión y{" "}
        <span className="text-green-700 block">sumérgete en la lectura</span>
      </h1>
      <form className="bg-white rounded-md p-5  w-full sm:w-3/4">
        <fieldset className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Tu Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
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
