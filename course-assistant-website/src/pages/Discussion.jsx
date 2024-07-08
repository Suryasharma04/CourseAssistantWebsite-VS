// import React from 'react';
// import SectionHeading from '../components/heading/sectionHeading';


// const Discussion = () => {
//   return (
//     <>
//      <SectionHeading title="Discussion" />
//     </>
//   );
// };

// export default Discussion;



import React from 'react'
import "./css/Discussion.css"
import { GiDiscussion } from "react-icons/gi";
import { BsPaperclip } from "react-icons/bs";


const Discussion = () => {
 return (
   <div className='discussion-page-container'>
      
      <h1 className='discussion-page-header'>Discussion Page</h1>
       <div className='discussion-page-icon'>
         <GiDiscussion />       
       </div>

       <div className='discussion-page-message'>
         <BsPaperclip className='discussion-page-icon-1' />
         <input
           type='text'
           className='discussion-page-themessage'
           placeholder='Message here!'
         />
       </div>

       <div className='discussion-page-button'>
           <button className="discussion-page-submit" type='submit'>
               <p>Ask TA</p>
           </button>

           <button className="discussion-page-submit" type='submit'>
               <p>Ask Professsor</p>
           </button>
       </div>
     
   </div>
 );
};

export default Discussion;