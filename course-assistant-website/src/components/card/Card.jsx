import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const Card = ({
    id,
    imgSrc,
    imgAlt,
    title,
    description,
    link,
    onClick,
}) => {
  return (  
    <Link to={link} className="link-card" onClick={() => onClick(id)}>
    <div className="card-container" data-id={id}> 
    <img src={imgSrc} alt={imgAlt} className="card-img"/>
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
    </div>
    </Link>
  )
}

export default Card;
