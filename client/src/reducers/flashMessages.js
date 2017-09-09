import shortid from 'shortid';
// import findIndex from 'lodash/findIndex';
import { ADD_FLASH_MESSAGE } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state, // Previous state
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    default:
      return state;
  }
};
