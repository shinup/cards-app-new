import React from 'react';
import { useState, useEffect } from 'react';
import './HomePage.css';
import InfiniteScroll from 'react-infinite-scroller';
import { getCards } from '../data/request';
import ImageCard from '../components/card.component'
import Loading from '../components/spinner.component'
import '../box.css';
import Card from 'react-bootstrap/Card';
let page = 0;

function HomePage() {
    const [items, setItems] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const [totalCards, setTotalCards] = useState(0);

    const getNewCards = async () => {
        page++;
        const response = await getCards(page, 20);        
        setItems(items.concat(response.data.cards));       
        
        setTotalCards(response.data._totalCount);
        setInitialized(true);
    }
    useEffect(() => {
        if (!initialized) {
            getNewCards();
        }
    });
    return (
        <div className="container fluid">
            <InfiniteScroll
                pageStart={page}
                loadMore={getNewCards}
                hasMore={totalCards > items.length}
                loader={<Loading/>}
                threshold={5}
            >   <div className="grid">
            
                {items.map((card, index) =>
               /* <Figure key={index}>
                    <Figure.Image
                        width={window.innerWidth / 3.5}
                        height={4}
                        src={i.imageUrl}
                    />
                    <Figure.Caption>
                   {i.name}
                   {i.text}
                  </Figure.Caption>
                </Figure>*/
                <ImageCard className="figure" key = {index} {...card} />
                )}</div>        
            </InfiniteScroll>
        </div>
    );
}
export default HomePage;