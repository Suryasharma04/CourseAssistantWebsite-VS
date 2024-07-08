import React from 'react';
import './sectionHeading.css';

export default function SectionHeading({ title }) {
  return (
    <div className="sectionHeading">
      <h2>{title}</h2>
    </div>
  );
}
