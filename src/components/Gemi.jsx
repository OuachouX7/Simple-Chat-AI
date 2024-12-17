import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import logo from "../images/Group 18.svg";
import "../styles/Gemi.css";
const Gemi = ({ sendDataToParent, apiKey }) => {
  const [reqs, setreqs] = useState([]);
  const [ress, setress] = useState([]);
  const [data, setdata] = useState([]);
  const [reqq, setreqq] = useState();
  const [key, setkey] = useState(apiKey);
  const [sub, setsub] = useState(false);
  const handleINp = (e) => {
    setreqq(e.target.value);
  };

  const handleRes = () => {
    setkey(apiKey);
    setreqs([...reqs, reqq]);
    setsub(true);

    const genAI = new GoogleGenerativeAI(key);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 900,
      responseMimeType: "text/plain",
    };

    async function run(useInput) {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(useInput);
      setress([...ress, result.response.text()]);
      setdata([...data, { req: reqq, res: result.response.text() }]);
    }

    run(reqq);
  };

  sendDataToParent({ data: data, sub: sub });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="gemi-container">
      <div className="gemi">
        <input
          type="text"
          name="inp"
          onChange={handleINp}
          placeholder="type your prompt here"
        />
        <button onClick={handleRes} className="btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#fff"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>
      <img className="footer-img" src={logo} alt="img2" />
    </div>
  );
};

export default Gemi;
