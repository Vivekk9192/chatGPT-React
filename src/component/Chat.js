import React from "react";
import { useState } from "react";
import chatIcon from './chatgpt.png'
import avtar from './avtar.png'
import { sendMSGToOpenAI } from "./openai";



const Chat = () => {
  const [input, setInput] = useState("");
  const isDisabled = input.length < 1;
  const handleSend =async () => {
    const res = await sendMSGToOpenAI(input)
    console.log(res)
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
    <img src={chatIcon} alt="ChatGPT ICON" className="chatgptIcon mx-3" style={{height:'50px'}} />
        <div className="w-50">
          <input type="text"
            className="form-control "
            id="chat"
            name="chat"           
            style={{border:"none"}}
          ></input>
          </div></div>
   
   
          <div className="d-flex justify-content-center align-items-center my-4 ">
          <img src={avtar} alt="ChatGPT ICON" className="chatgptIcon mx-3" style={{height:'50px'}} />
          <textarea
            className=""
            id="chat"
            name="chat"
            rows="15"
            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rerum cupiditate at ut reprehenderit, quo necessitatibus expedita incidunt accusantium quasi nulla. Fuga mollitia quis minus doloremque, aliquid fugit quas, laboriosam asperiores nostrum optio voluptate nulla error sed rem commodi suscipit nemo. Doloremque ducimus nulla repellat eius perferendis error quam voluptate? dddddddddddddddddddddddddddddddddddddddddddddddddddddd fd dgff dfd dfd dsgdf dfd dd "
            style={{width:"50%", textAlign:"justify"}}
          ></textarea>
      </div>


       <div className=" fixed-bottom my-2">
       <div className=" d-flex justify-content-center">
       <div className="input-group w-50">
          <input
            type="text"
            className="form-control text-justify"
            id="write"
            name="write"
            placeholder="Ask anything to know more"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}          
          />
          <button
            className="btn btn-success"
            type="button"
            name="send"
            id="send"
            disabled={isDisabled}
            onClick={handleSend}
            >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
            </div> 
      </div> 
          <p className="d-flex justify-content-center my-2">ChatGPT is useful in day-to-day life.</p> 
      </div> 
    </>
  );
};

export default Chat;
