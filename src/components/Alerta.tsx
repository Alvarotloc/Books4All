import type { AlertaProps } from '../interfaces/index';
const Alerta = ({error,mensaje}:AlertaProps):JSX.Element => {
  return (
    <div className={`${error ? 'bg-red-500' : 'bg-blue-500'} flex items-center justify-center w-full py-3 mb-5 rounded-sm text-white`}>{mensaje}</div>
  )
}

export default Alerta