import * as constants from './../constants/constants';

const getData = async (url, value) => {
  let requestUrl = `${constants.baseUrl}${url}`;
  let fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  if (value) {
    requestUrl = `${requestUrl}${value}`;
  }
  try {
    let response = await fetch(requestUrl, fetchOptions);
    let res = await response.json();
    return res.body;
  } catch (error) {
    console.error('fetchDataError', error);
  }
};

export { getData };
