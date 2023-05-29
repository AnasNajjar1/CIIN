import { useAuthUser } from "../../store/context/authContext";
import { Navigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}
const AuthentificationGuard = ({ children }: Props) => {
  const { authUser } = useAuthUser();
  if (!authUser?.isConnected) {
    return <Navigate to="/" replace={true} />;
  }
  return <>{children}</>;
};

export default AuthentificationGuard;
