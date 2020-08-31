import React from 'react';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { getCards } from '../data/request';
import ImageCard from '../components/card.component'
import CardList from '../components/card-list.component'
import Loading from '../components/spinner.component'
import '../box.css';
let page = 0;

const HomePage = () => {     
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
            >
            <CardList items={items} ></CardList>  
            </InfiniteScroll>
        </div>
    );
}
export default HomePage;