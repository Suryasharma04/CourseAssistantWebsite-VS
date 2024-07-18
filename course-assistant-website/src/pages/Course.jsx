import React from 'react';
import SectionHeading from '../components/heading/sectionHeading';
import Card from '../components/card/Card';
import cardData from '../data/CardData.json'; 
import './css/Course.css';
import { useNavigate } from 'react-router-dom';

export default function Course() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
  };

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
          link={card.link} 
          onClick={handleCardClick} // Pass the click handler
          />
      ))}
    </div></>
  )
}
