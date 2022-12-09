import { FC } from "react";
import { IAlerta } from "../interfaces";

export const Alerta: FC<IAlerta> = ({ error, msg }): JSX.Element => {
  return (
    <div
      className={`text-center py-2 rounded w-full text-white font-bold capitalize ${
        error ? "bg-red-500" : "bg-blue-500"
      }`}
    >
      {msg}
    </div>
  );
};
