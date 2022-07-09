import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/AuthUsuarios/Login"
import ContenedorAuth from './components/ContenedorAuth';
import Registro from './pages/AuthUsuarios/Registro';
import OlvidePassword from './pages/AuthUsuarios/OlvidePassword';
import { AlertaProvider } from "./context/AlertaProvider";

const App = ():JSX.Element => {
  return (
    <AlertaProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContenedorAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AlertaProvider>
  )
}

export default App