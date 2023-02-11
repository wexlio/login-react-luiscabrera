import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // const [user, setUser] = useState(null);
  const [user, setUser] = useState({ id: 1,username:'diego', role: "regular" });

  const isLogged = () => !!user
  const hasRole = (role) => user?.role === role

  const change = (usuario) => setUser(usuario)

  const contexValue = {
    user,
    isLogged,
    hasRole,
    change
  };

  return (
    <AuthContext.Provider value={contexValue}>{children}</AuthContext.Provider>
  );
}
