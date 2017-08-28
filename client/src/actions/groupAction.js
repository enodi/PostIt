import axios from 'axios';

const loadGroups = () => (dispatch) => {
  return axios.get('/api/user/:user_id/group').then((groups) => {
    dispatch(loadGroupsSuccess(groups));
  }).catch((error) => {
    throw (error);
  });
};

export default loadGroups;
