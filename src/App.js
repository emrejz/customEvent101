import { useEffect, useState } from "react";
import { on, remove } from "./events";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    on("counterInc", ({ detail }) => setCounter(detail));

    return () => remove("counterInc", ({ detail }) => setCounter(detail));
  }, []);

  return <h1>{counter}</h1>;
};

export default App;
