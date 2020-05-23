import { COVID_API_URL } from '../constants';
import axios from 'axios';

import { setCountries } from '../actions';

const fetchCountries = async dispatch => {
  try {
    const response = await axios.get(COVID_API_URL);

    const { data = [] } = response;

    if (typeof dispatch === 'function') dispatch(setCountries(data));

    console.log(data);

    return data;
  } catch (error) {
    alert('Communication error fetching countries data. Please refresh the page in a few minutes.');
    console.log(error.message);
    return;
  }
};

export default fetchCountries;
