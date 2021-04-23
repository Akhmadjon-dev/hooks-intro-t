import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [data, setData] = useState({ name: "", phone: "" });
  const [show, setShow] = useState(true);
  console.log(data, "dataaa");

  useEffect(() => {
    console.log("useEffect ishladi"); // bu ham component didmount ham lyuboy state o'zgarsa ishlaydi
  });

  useEffect(() => {
    console.log("ikkinchi effect ishladi"); // component did mount
  }, []);

  useEffect(() => {
    console.log("uchiunci ishladi"); // faqat data o'zgarsa ishlaydi va component did mount
  }, [show, data]);

  return (
    <div className="app">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          name="name"
          defaultValue={data.name}
          placeholder="name:"
        />
        <input
          type="tel"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          name="phone"
          defaultValue={data.phone}
          placeholder="phone:"
        />
        <button>Send</button>
      </form>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && (
        <User data={data}>
          <h2>salom bu user ga props</h2>
        </User>
      )}
    </div>
  );
}

export default App;
