import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Dashboard, Home } from "./pages";
import { AxiosInterceptor } from "./services/request.ts";
import { ROUTES } from "./utils/constants.ts";
import { AuthUserProvider } from "./store/context/authContext.tsx";
import AuthentificationGuard from "./components/Layout/authentificationGuard.tsx";

function App() {
  return (
    <>
      <AuthUserProvider>
        <AxiosInterceptor>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path={`/${ROUTES.USER}`}
                element={
                  <AuthentificationGuard>
                    <Outlet />
                  </AuthentificationGuard>
                }
              >
                <Route path={`${ROUTES.DASHBOARD}`} element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </AxiosInterceptor>
      </AuthUserProvider>
    </>
  );
}

export default App;
