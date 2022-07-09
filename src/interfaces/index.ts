export interface AlertaProps {
    error   : boolean;
    mensaje : string;
}
export interface IChildren {
    children : JSX.Element | JSX.Element[];
}
export interface ContextAlerta {
    alerta    : AlertaProps;
    setAlerta : Function;
}