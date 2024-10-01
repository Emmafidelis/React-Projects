import Button from "./components/Button";
import "./App.css";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <Alert onClose={() => setVisible(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setVisible(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
