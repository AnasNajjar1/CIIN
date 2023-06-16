import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Dashboard, Home, UserProfile, Company } from "./pages";
import { AxiosInterceptor } from "./services/request.ts";
import { ROUTES } from "./utils/constants.ts";
import { AuthUserProvider } from "./store/context/authContext.tsx";
import AuthentificationGuard from "./components/Layout/authentificationGuard.tsx";
import UpdateCompany from "./pages/UpdateCompany/index.tsx";

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
                element={<AuthentificationGuard />}
              >
                <Route path={`${ROUTES.DASHBOARD}`} element={<Dashboard />} />
                <Route
                  path={`${ROUTES.USERPROFILE}`}
                  element={<UserProfile />}
                />
                <Route path={`${ROUTES.COMPANY}`} element={<Company />} />
                <Route
                  path={`${ROUTES.UPDATECOMPANY}`}
                  element={<UpdateCompany />}
                />
              </Route>
            </Route>
          </Routes>
        </AxiosInterceptor>
      </AuthUserProvider>
    </>
  );
}

export default App;
