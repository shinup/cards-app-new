import React from 'react';
import Card from 'react-bootstrap/Card';
import '../box.css';


const ImageCard = ({ name, imageUrl, type, text, set }) => {       
    return (
      <>
        <Card style={{ width: '5rem' }} className="box mb-2" border="primary" bg ="dark" text="light">        
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title >{name}</Card.Title>
            <Card.Subtitle>{type} </Card.Subtitle>  
            <Card.Text>{text}</Card.Text>
            <Card.Subtitle>{set.name}</Card.Subtitle>  
        </Card.Body>
        </Card>
       
      </>
    );
  };

  export default ImageCard;