const APIURL = 'https://api.elderscrollslegends.io/v1/cards';
const axios = require('axios');
export const getCards = (page = 1, pageSize = 1) => axios.get(`${APIURL}/?&page=${page}&pageSize=${pageSize}`);
