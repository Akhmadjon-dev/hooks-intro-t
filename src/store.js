import { createContext, useState } from "react";

const contextUser = createContext();

function UserContext({ children }) {
  const [data, setData] = useState({ age: 0 });
  const filter = (id) => {
    return data.filter((i) => i.age > id);
  };
  return (
    <contextUser.Provider value={[data, setData, filter]}>
      {children}
    </contextUser.Provider>
  );
}

export default UserContext;
export { contextUser };
