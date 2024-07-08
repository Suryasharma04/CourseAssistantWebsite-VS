import React from 'react';
import SectionHeading from '../components/heading/sectionHeading';
import Card from '../components/card/Card';
import cardData from '../data/CardData.json'; 
import './css/Course.css';


export default function Course() {
  return (
    <>
    <SectionHeading title="Courses" />
    <div className="course-container">
      {cardData.map((card) => (
        <Card
          key={card.id} // Use the unique id as the key
          id={card.id}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          title={card.title}
          description={card.description}
          buttontext={card.buttontext}
          link={card.link} />
      ))}
    </div></>
  )
}
