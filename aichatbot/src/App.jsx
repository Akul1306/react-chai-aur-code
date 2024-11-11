import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");

  async function generateAnswer() {
    console.log("loading");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBmKOwDKmWNfTQ3ZC9Mt3evtY4RAYTi8Ao",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }

  return (
    <>
      <h1>AI Chatbot</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
    </>
  );
}

export default App;
