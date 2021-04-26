import React, { useContext, useEffect, useState } from "react";
import { contextUser } from "./store";

const User = () => {
  let [count, setCount] = useState(0);
  const user = useContext(contextUser);
  const filter = (id) => {
    return user.data.filter((i) => i.age > id);
  };
  useEffect(() => {
    console.log(user, "contextdan");
    return () => {
      console.log("user useEffect");
    };
  }, []);

  console.log(user, "______________---");
  return <div>demak count: {count}</div>;
};

export default User;
