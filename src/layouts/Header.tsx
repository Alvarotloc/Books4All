import { FC } from "react";
import { Link } from "react-router-dom";
import { AvatarUsuarioHeader, HamburguerMenu } from "../components";

export const Header: FC = (): JSX.Element => {
  return (
    <header className="bg-white w-full py-8 px-5 md:p-10 flex justify-between relative h-[120px]">
      <nav className="flex gap-5 items-center w-fu">
        <HamburguerMenu />
        <Link to='/' className="flex items-center gap-2">
        <img src="/LogoMovil.svg" alt="Imagen del logo de la compañía" />
        <p className="border-r pr-4 border-gray-400 h-full hidden md:flex items-center font-semibold text-xl">
          Books4All
        </p>
        </Link>
        <div className="hidden md:flex items-center gap-2 ">
          <label htmlFor="buscador">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:scale-105 transition-transform cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </label>
          <input
            type="text"
            placeholder="Buscar..."
            name="buscador"
            id="buscador"
            className="border py-1 px-2 rounded placeholder:text-sm border-gray-400"
          />
        </div>
      </nav>
      <AvatarUsuarioHeader />
    </header>
  );
};
