export const makeRequest = (url='', params) => {
  return fetch(url).then(response => response.json()).catch(err => console.log(err))
};

export const get = url => makeRequest(url);
