import React, { useCallback, useEffect, useMemo, useState } from "react";

const User = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      console.log("user useEffect");
    };
  }, []);
  const callback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <div onClick={() => callback()}>demak count: {count}</div>;
};

export default User;
