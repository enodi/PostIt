import 'whatwg-fetch';

class HttpService {
  getGroups() {
    fetch('http://localhost:3001/api/user/:user_id/group')
    .then(response => {
      console.log(response.json());
    })
  }
}

export default HttpService;
