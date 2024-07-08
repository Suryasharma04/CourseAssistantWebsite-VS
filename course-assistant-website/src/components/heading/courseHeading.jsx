import React from 'react';
import './courseHeading.css';

export default function courseHeading({
    title,
    description,
    }) {
    return (
        <div className="courseHeading">
        <p>{description}</p>
        <h2>{title}</h2>
          
        </div>
    );
};
    
