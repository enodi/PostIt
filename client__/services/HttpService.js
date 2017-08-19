import 'whatwg-fetch';

class HttpService {
  getGroups() {
    fetch('http://127.0.0.1:3001/api/user/signup')
    .then((response) => {
      console.log(response.json());
    })
  }
}

export default HttpService;
