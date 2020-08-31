import React from "react";  
import { useState } from "react";  
import { Formik } from "formik";  
import Form from "react-bootstrap/Form";  
import Col from "react-bootstrap/Col";  
import Button from "react-bootstrap/Button";  
import * as yup from "yup";  
import InfiniteScroll from "react-infinite-scroller";  

import { searchCards } from '../data/request';
import CardList from '../components/card-list.component'
import Loading from '../components/spinner.component'
import ImageCard from '../components/card.component'

const schema = yup.object({  
  keyword: yup.string().required("Please enter name")  
});

const CardSearchPage = () => {     

  const [cards, setCards] = useState([]);  
  const [keyword, setKeyword] = useState([]);  
  const [page, setPage] = useState(1);  
  const [totalCards, setTotal] = useState(0);  
  const [searching, setSearching] = useState(false); 

  const handleSubmit = async evt => {  
    const isValid = await schema.validate(evt);  
    if (!isValid) {  
      return;  
    }  
    setKeyword(evt.keyword);  
    searchAllCards(evt.keyword, 1);  
  }; 

  const searchAllCards = async (keyword, pg = 1) => {  
    setSearching(true); 
    const response = await searchCards(keyword, page);  
    let items = response.data.cards;  
    setData(items, response, pg)
  }; 

  const getMoreCards = async () => {  
    let pg = page;  
    pg++;  
    const response = await searchCards(keyword, pg);  
    const items = cards.concat(response.data.cards);  
    setData(items, response, pg)
  }; 

  const setData = (items, response, page) => {  
    setCards(items);  
    setTotal(response.data._totalCount);  
    setPage(page);  
  }

  return (  
    <div className="container fluid">  
      <h1 className="text-center">Search</h1>  
      <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={{ keyword:""}}>  
        {({  
          handleSubmit,  
          handleChange,            
          values,  
          touched,  
          isInvalid,  
          errors  
        }) => (  
          <Form noValidate onSubmit={handleSubmit}>  
            <Form.Row>  
              <Form.Group as={Col} md="12" controlId="keyword">  
                <Form.Label>Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="keyword"  
                  placeholder="name"  
                  value={values.keyword || ""}  
                  onChange={handleChange}  
                  isInvalid={touched.keyword && errors.keyword}  
                />  
                <Form.Control.Feedback type="invalid">  
                  {errors.keyword}  
                </Form.Control.Feedback>  
              </Form.Group>  
            </Form.Row>  
            <Button type="submit" variant="dark">  
              Search  
            </Button>  
          </Form>  
        )}  
      </Formik>  
      <br />  
      <InfiniteScroll
        pageStart={page}
        loadMore={getMoreCards}
        hasMore={searching && totalCards > cards.length}
        loader={<Loading/>}
        threshold={5}
        >   
        <div className="grid">            
            {cards.map((card, index) =>               
            <ImageCard key = {index} {...card} />
            )}
        </div>  
        <CardList items={cards} ></CardList>        
        </InfiniteScroll>
    </div>  
  );  
}  
export default CardSearchPage;