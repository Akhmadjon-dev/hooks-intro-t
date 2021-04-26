import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import UserContext from "./store";
import User from "./User";

function App() {
  const [data, setData] = useState({ name: "", phone: "" });
  const [show, setShow] = useState(true);
  const inputRef = useRef(null);
  // useEffect(() => {
  //   console.log("useEffect ishladi"); // bu ham component didmount ham lyuboy state o'zgarsa ishlaydi
  // });

  // useEffect(() => {
  //   console.log("ikkinchi effect ishladi"); // component did mount
  // }, []);

  // useEffect(() => {
  //   console.log("uchiunci ishladi"); // faqat data o'zgarsa ishlaydi va component did mount
  // }, [show, data]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(inputRef, "reference");
  };
  return (
    <UserContext>
      <div className="app">
        <form onSubmit={formHandler}>
          <input
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            name="name"
            defaultValue={data.name}
            placeholder="name:"
          />
          <input
            ref={inputRef}
            type="tel"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            name="phone"
            defaultValue={data.phone}
            placeholder="phone:"
          />
          <Input />
          <button>Send</button>
        </form>
        <button onClick={() => setShow(!show)}>toggle</button>
        {show && (
          <User data={data}>
            <h2>salom bu user ga props</h2>
          </User>
        )}
      </div>
    </UserContext>
  );
}
export default App;
