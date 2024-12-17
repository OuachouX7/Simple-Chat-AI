import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Sections";
import Gemi from "./components/Gemi";

function App() {
  const [resp, setresp] = useState();
  const [subf, setsubf] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const receiveDataFromChild = (data) => {
    setresp(data.data);
    setsubf(data.sub);
  };

  return (
    <div className="app-container">
      <Header />
      <Section resp={resp} sub={subf} />
      <Gemi sendDataToParent={receiveDataFromChild} apiKey={apiKey}/>
    </div>
  );
}

export default App;
