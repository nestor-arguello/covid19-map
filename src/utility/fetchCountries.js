import { COVID_API_URL } from '../constants';
import axios from 'axios';

const fetchCountries = async setCountries => {
  try {
    const response = await axios.get(COVID_API_URL);

    const { data = [] } = response;

    if (typeof setCountries === 'function') setCountries(data);

    return data;
  } catch (error) {
    console.log('Failed API request', error.message);
    return;
  }
};

export default fetchCountries;
