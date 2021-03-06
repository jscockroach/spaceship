const getData = async (url, value) => {
  let requestUrl = `${url}`;
  let fetchOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  if (value) {
    requestUrl = `${requestUrl}${value}`;
  }
  try {
    let response = await fetch(requestUrl, fetchOptions);
    let res = await response.json();
    return res;
  } catch (error) {
    console.error("fetchDataError", error);
  }
};

export { getData };
