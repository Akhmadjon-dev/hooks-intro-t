import { createContext, useState } from "react";

const contextUser = createContext();

function UserContext({ children }) {
  const [data, setData] = useState({ age: 0 });

  return (
    <contextUser.Provider value={[data, setData]}>
      {children}
    </contextUser.Provider>
  );
}

export default UserContext;
export { contextUser };
