import { useAuthUser } from "../../store/context/authContext";
import { Navigate, Outlet } from "react-router-dom";
const AuthentificationGuard = () => {
  const { authUser } = useAuthUser();
  if (authUser?.isConnected) {
    return <Navigate to="/" replace={true} />;
  }
  return <Outlet />;
};

export default AuthentificationGuard;
