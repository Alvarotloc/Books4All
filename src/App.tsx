import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthLayout, Header } from "./layouts";

import { Inicio, Login } from "./pages";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
          </Route>
          <Route path="/area-privada" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
