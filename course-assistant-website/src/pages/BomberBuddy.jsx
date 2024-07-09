
import {React, useState } from 'react'
import "./css/BomberBuddy.css"
import SectionHeading from '../components/heading/sectionHeading';
import { FaRobot, FaCircleArrowUp } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import { BsPaperclip } from "react-icons/bs";
import ask from "../doAsk";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const BomberBuddy = ({ account, aType }) => {
  const [resp, setResp] = useState("<p>No Response Yet!</p>");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const askAssistant = async () => {
    setLoading(true);
    const quest = document.getElementById('question').value;
    const temp = await ask(account, aType, quest);
    setResp(temp);
    setLoading(false);
    setInputValue(''); // Clear the input after asking
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      askAssistant();
    }
  };

 return (
    <>
    <SectionHeading/> 
   <div className='bomberbuddy-container'>
     <h1>
     <FaRobot className='bomberbuddy-bot'/>
     <Typewriter
       options={{
         autoStart: true,
         loop: true,
         delay: 50,
         strings: ["Ask Bomber Buddy!"]
       }}
     />
     </h1>
     <div className='bomberbuddy-message'>
         <p className="bomberbuddy-text">  
           <BsPaperclip className='bomberbuddy-icon-1'/>
           <input
              type='text'
              className='bomberbuddy-themessage'
              placeholder='Message here!'
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
           <FaCircleArrowUp className='bomberbuddy-icon-2' onClick={askAssistant}/>
         </p>
     </div>

     {/* <PacmanLoader
        color={"blue"}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading!"
        data-testid="loader"
      /> */}
      
   </div>
   </>
 );
};

export default BomberBuddy;