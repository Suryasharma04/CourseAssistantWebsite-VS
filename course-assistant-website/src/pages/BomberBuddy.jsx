// import React from 'react';
// import SectionHeading from '../components/heading/sectionHeading';

// const BomberBuddy = () => {
//   return (
//     <>
//       <SectionHeading title="Bomber Buddy" />
//       <div>
//         new text.




        
//       </div>
//     </>
//   );
// };

// export default BomberBuddy;




////


import React from 'react'
import "./css/BomberBuddy.css"
import SectionHeading from '../components/heading/sectionHeading';
import { FaRobot, FaCircleArrowUp } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import { BsPaperclip } from "react-icons/bs";


const BomberBuddy = () => {
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
           />
           <FaCircleArrowUp  className='bomberbuddy-icon-2'/>
         </p>
     </div>
   </div>
   </>
 );
};

export default BomberBuddy;