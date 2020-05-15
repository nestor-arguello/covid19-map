import { COVID_API_URL } from '../constants';
import axios from 'axios';

import { setCountries } from '../actions';

const fetchCountries = async dispatch => {
  try {
    const response = await axios.get(COVID_API_URL);

    const { data = [] } = response;

    if (typeof dispatch === 'function') dispatch(setCountries(data));

    return data;
  } catch (error) {
    console.log('Failed API request', error.message);
    return;
  }
};

export default fetchCountries;
