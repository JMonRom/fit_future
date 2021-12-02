import axios from 'axios'

const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;

const food = (query) =>
axios.get(`${REACT_APP_BASEURL}${query}${REACT_APP_APIKEY}`);

export default food;