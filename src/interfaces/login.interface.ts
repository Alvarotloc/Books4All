export interface IDataUsuario {
  _id: string;
  nombre: string;
  email: string;
  token: string;
}
export interface IAuthContext {
  auth: IDataUsuario;
  setAuth: Function;
  cargando: boolean;
}
