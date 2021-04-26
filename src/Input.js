import React, { useContext } from "react";
import { contextUser } from "./store";
export default function Input() {
  const [olma, setOlma, hokkey] = useContext(contextUser);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setOlma({ ...olma, age: e.target.value })}
        name="age"
        defaultValue={olma.age}
        placeholder="Age:"
      />
    </div>
  );
}
