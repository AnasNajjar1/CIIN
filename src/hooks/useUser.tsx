import { useAuthUser } from "../store/context/authContext.tsx";

interface CurrentUser {
  token: string;
  isConnected: boolean;
}

const useUser = () => {
  const { setAuthUser } = useAuthUser();
  const storeCurrentUser = (data: CurrentUser) => {
    window.localStorage.setItem("currentUser", JSON.stringify(data));
    setAuthUser(data);
  };

  return {
    storeCurrentUser,
  };
};

export default useUser;