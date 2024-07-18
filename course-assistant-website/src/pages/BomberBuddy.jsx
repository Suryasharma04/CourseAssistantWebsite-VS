// import { React, useState, useRef, useEffect } from 'react';
// import "./css/BomberBuddy.css";
// import { FaRobot, FaCircleArrowUp } from "react-icons/fa6";
// import Typewriter from 'typewriter-effect';

import React, { useState, useRef, useEffect } from 'react';
import "./css/BomberBuddy.css";
import { FaRobot, FaCircleArrowUp } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import { BsPaperclip } from "react-icons/bs";
import ask from "../doAsk";
import PacmanLoader from "react-spinners/PacmanLoader";
import BeatLoader from 'react-spinners/BeatLoader';

const BomberBuddy = ({ account, aType }) => {
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showBomberBuddy, setShowBomberBuddy] = useState(true);
  const textareaRef = useRef(null);

  const askAssistant = async () => {
    setLoading(true);
    // setShowBomberBuddy(true);
    const quest = document.getElementById('question').value;
    console.log("askAssistant is sending account: " + account );
    const temp = await ask(account, aType, quest);
    setResp(temp);
    setLoading(false);
    setInputValue(''); 
    setShowBomberBuddy(false);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    autoResizeTextarea();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      askAssistant();
    }
  };

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    autoResizeTextarea();
  }, [inputValue]);

  return (
    <>
      <div className='bomberbuddy-container'>
      {showBomberBuddy && (
          <h1>
            <FaRobot className='bomberbuddy-bot' />
            {!loading && (
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Ask Bomber Buddy!"]
                }}
              />
            )}

                <BeatLoader   
                color={"#003A70"}
                loading={loading}
                cssOverride={override}
                size={15}
                aria-label="Loading!"
                data-testid="loader"
              />

          </h1>
        )}
        <div className='bomberbuddy-message'>
          <div className="bomberbuddy-textarea-wrapper">
            {/* <BsPaperclip className='bomberbuddy-icon-1' /> */}
            <textarea
              id='question'
              ref={textareaRef}
              className='bomberbuddy-textarea'
              placeholder='Message here!'
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows={1} 
            />
            {/* {!showBomberBuddy && loading && <div>Loading...</div>} */}
            {loading ? (
              <BeatLoader   
              color={"gray"}
              loading={loading}
              cssOverride={override}
              size={8}
              aria-label="Loading!"
              data-testid="loader"
              className='bomberbuddy-icon-2'
            />
            ) : (
              <FaCircleArrowUp className='bomberbuddy-icon-2' onClick={askAssistant} />
            )}
            

          </div>
        </div>
        {/* <div className="response" dangerouslySetInnerHTML={{ __html: resp }} /> */}

        
{/* 
          {resp && (
          <div className='bomberbuddy-response-bubble' dangerouslySetInnerHTML={{ __html: resp }} />
            
        )} */}

        {resp && (
          <div className='bomberbuddy-response-container'>
            {/* <div className='bomberbuddy-response-header'>Response:</div> */}
            <div className='bomberbuddy-response-bubble' dangerouslySetInnerHTML={{ __html: resp }} />
          </div>
        )}

      </div>
    </>
  );
};

export default BomberBuddy;



