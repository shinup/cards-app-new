import React from 'react';
import ImageCard from './card.component'


const CardList = ({ items }) => {       
        return (
        <div className="grid">            
            {items.map((card, index) =>               
            <ImageCard key = {index} {...card} />
        )}
        </div>  
    );
  };

  export default CardList;