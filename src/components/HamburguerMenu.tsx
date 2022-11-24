import { FC, useState } from "react";
import { Link } from "react-router-dom";
export const HamburguerMenu: FC = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <span
          className={`w-6 h-0.5 bg-black transition-transform origin-top-left ${
            visible ? "rotate-45 translate-x-1 -translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-opacity ${
            visible ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-transform origin-bottom-left ${
            visible ? "-rotate-45 translate-x-1" : ""
          }`}
        ></span>
      </div>
      <article
        className={`absolute px-10 py-7 bg-white gap-10 top-[120px] h-[calc(100vh-120px)] transition-all duration-500 ${
          visible ? "left-0" : "-left-full"
        }`}
      >
        <nav className="flex flex-col gap-4">
          <form className="md:hidden">
            <fieldset className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar..."
                name="buscador"
                id="buscador"
                className="border py-1 px-2 w-32 rounded placeholder:text-sm border-gray-400"
              />
              <button type="submit">
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
              </button>
            </fieldset>
          </form>
          <span className="font-bold text-lg">Géneros: </span>
          <Link to="/" className="pl-2 hover:underline">
            Fantasía
          </Link>
          <Link to="/" className="pl-2 hover:underline">
            Novela Adolescente
          </Link>
          <Link to="/" className="pl-2 hover:underline">
            Romance
          </Link>
          <Link to="/" className="pl-2 hover:underline">
            Clásicos
          </Link>
          <Link to="/" className="pl-2 hover:underline">
            Tecnología
          </Link>
          <Link to="/" className="pl-2 hover:underline">
            Ciencia Ficción
          </Link>
        </nav>
      </article>
    </>
  );
};
