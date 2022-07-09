import { useContext } from "react"
import AlertaContext from '../context/AlertaProvider';

const useAlerta = () => useContext(AlertaContext);

export default useAlerta