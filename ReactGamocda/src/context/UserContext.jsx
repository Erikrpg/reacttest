import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [name, setName] = useState("test");
  return (
    <UserContext.Provider value={{ name }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
