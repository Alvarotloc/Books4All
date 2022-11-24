import { FC } from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { Inicio } from "./pages"

const App:FC = ():JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App