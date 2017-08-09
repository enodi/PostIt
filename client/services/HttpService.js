import fetch from 'whatwg-fetch';

export default class HttpService {
  getGroups() {
    const promise = new Promise((resolve, reject) => {
      fetch('http://127.0.0.1:8888/api/group')
      .then((response) => {
        resolve(response.json());
      })
    })
    return promise;
  }
}
