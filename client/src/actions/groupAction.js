import axios from 'axios';
// import { browserHistory } from 'react-router';
// import * as actionTypes from './actionTypes';

// Action for creating new group
export function createGroup(name){
    axios.post('/api/group', name)
    .then((res) => console.log(res))
}
