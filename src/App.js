import { useEffect, useState } from "react";
import { on, remove } from "./events";

const counterButtonId = "counterButton";

const App = () => {
  const [countWithCustomEvent, setCountWithCustomEvent] = useState(0);
  const [countWithoutCustomEvent, setCountWithoutCustomEvent] = useState(0);

  const handleCustomEventValue = ({ detail }) =>
    setCountWithCustomEvent(detail);
  const handleGlobalVariable = (e) => {
    if (e.target.id === counterButtonId) {
      setCountWithoutCustomEvent(window.count);
    }
  };

  useEffect(() => {
    // custom event
    on("counterCustomEvent", handleCustomEventValue);
    // exists event
    on("click", handleGlobalVariable);

    return () => {
      remove("counterCustomEvent", handleCustomEventValue);
      remove("click", handleGlobalVariable);
    };
  }, []);

  return (
    <>
      <h1>Count by custom event: {countWithCustomEvent}</h1>
      <h1>
        Count by global variable and exist event: {countWithoutCustomEvent}
      </h1>
    </>
  );
};

export default App;
