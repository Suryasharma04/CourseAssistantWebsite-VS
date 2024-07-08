import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../data/CardData.json'; 
import CourseHeading from '../components/heading/courseHeading';
import SubsectionHeading from '../components/heading/subsectionHeading';

const CardDetail = () => {
    const { id } = useParams();
    const card = cardData.find((item) => item.id.toString() === id);

    if (!card) {
        return <h2>Card not found</h2>;
    }

    return (
        <>
        <CourseHeading
        title={card.title}
        description={card.description}/>
        <SubsectionHeading subsection={"Books"}/>
        <SubsectionHeading subsection={"Presentations"}/>
        <SubsectionHeading subsection={"Videos"}/>
        <SubsectionHeading subsection={"Other Resources"}/>
        </>
    );
};

export default CardDetail;