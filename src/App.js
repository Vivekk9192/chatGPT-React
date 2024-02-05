import Navbar from "./component/Navbar";
import { useEffect, useRef, useState } from "react";
import chatIcon from "./component/chatgpt.png";
import avtar from "./component/avtar.png";
import { sendMSGToOpenAI } from "./component/openai";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm ChatGPT, a virtual assistant powered by OpenAI's GPT-3.5. I'm here to help answer your questions, provide information, or just have a chat. Feel free to ask me anything!",
      isBot: true,
    },
  ]);
  const isDisabled = input.length < 1;

  const end = useRef(null)
  useEffect(()=>{end.current.scrollIntoView() 
  // eslint-disable-next-line
  },[messages])


  const handleSend = async () => {
    try {
      const text = input;
      setInput("");
      setMessages((prevMessages) => [...prevMessages, { text, isBot: false }]);

      const res = await sendMSGToOpenAI(text);
      // const res = await sendMSGToOpenAI(input);

      setMessages((prevMessages) => [
        ...prevMessages,
        // { text, isBot: false },
        // { text: input, isBot: false },
        { text: res, isBot: true },
      ]);

      console.log(res);
    } catch (error) {
      console.error("Error in handleSend:", error.message);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      await handleSend();
    }
  };

  return (
    <>
      <Navbar />
      <h2 className="my-3 text-center">Vivek GPT</h2>
      <div className="main">
        {messages.map((message, i) => (
          <div key={i} className={message.isBot ? "chat bot" : "chat"}>
            <div className="d-flex my-3 ">
              <img
                src={message.isBot ? chatIcon : avtar}
                alt="ChatGPT ICON"
                className="chatgptIcon mx-3 rounded-circle border border-dark"
                style={{ height: "50px" }}
              />
              <p
                className="text"
                style={{
                  width: "600px",
                  height: "fit-content",
                  textAlign: "justify",
                  border: "none",
                }}
              >
                {message.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={end}></div>
      </div>
      <div className=" fixed-bottom my-2">
        <div className="d-flex justify-content-center">
          <div className="input-group w-50"  >
            <input
              type="text"
              className="form-control text-justify"
              id="write"
              name="write"
              placeholder="Ask anything to know more"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
              style={{border:"2px solid black"}}
            />
            <button
              className="btn btn-success"
              type="button"
              name="send"
              id="send"
              disabled={isDisabled}
              onClick={handleSend}
              style={{border:"2px solid black"}}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <p className="d-flex justify-content-center my-2">
          ChatGPT is useful in day-to-day life.
        </p>
      </div>
    </>
  );
}

export default App;
