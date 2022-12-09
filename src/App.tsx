import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout, Header } from "./layouts";

import { Inicio, Login } from "./pages";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route path="/area-privada" element={<AuthLayout />}>
          <Route index element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
