import React from 'react';
import './subsectionHeading.css';

export default function subsectionHeading({subsection}) {
  return (
      <div className="subsectionHeading">
        <p>{subsection}</p>
    </div>
  )
}
