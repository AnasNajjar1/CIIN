import * as React from "react";
import { useState } from "react";

type AuthUserProviderProps = { children: React.ReactNode };

const AuthUserContext = React.createContext<any | undefined>(undefined);

function AuthUserProvider({ children }: AuthUserProviderProps) {
  const currentUserStorage = window.localStorage.getItem("currentUser");
  const currentUser = currentUserStorage
    ? JSON.parse(currentUserStorage)
    : {
        isConnected: false,
        token: "",
      };
  const [authUser, setAuthUser] = useState({
    username: "",
    isConnected: currentUser.isConnected,
    token: currentUser.token,
  });

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}

// useToast Hook
const useAuthUser = () => {
  const context = React.useContext(AuthUserContext);
  if (context === undefined)
    throw new Error("useAuthUser must be used within TemplateProvider");
  return context;
};

export { AuthUserProvider, useAuthUser };
