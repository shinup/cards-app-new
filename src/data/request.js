const APIURL = 'https://api.elderscrollslegends.io/v1/cards';
const axios = require('axios');
export const getCards = (page = 1, pageSize = 1) => axios.get(`${APIURL}/?&page=${page}&pageSize=${pageSize}`);
export const searchCards = (keyword, page = 1, pageSize=20) =>  
  axios.get(  
    `${APIURL}/?page=${page}&name=${keyword}&pageSize=${pageSize}`  
  );
