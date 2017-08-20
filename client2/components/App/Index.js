// import React from 'react';
// import User from './User';
// import Main from './Main';
//
// export default class Index extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: 'Max',
//       age: 27
//     };
//   }
//
//   changeUsername(newName) {
//     this.setState({
//       username: newName
//     });
//   }
//
//   changeAge() {
//     this.setState({
//       age: this.state.age + 3
//     })
//   }
//
//   render() {
//     return(
//       <div className="container">
//         <Main changeUsername={this.changeUsername.bind(this)} changeAge={this.changeAge.bind(this)}/>
//         <User username={this.state.username} age={this.state.age}/>
//       </div>
//     );
//   }
// }

import { createStore } from 'redux';

const initialState = {
  result: 1,
  lastValues: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state
      };
      break;
    case 'SUBTRACT':
      state.result -= action.payload;
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('Store updated!', store.getState());
});

store.dispatch({
  type: 'ADD',
  payload: 100
});

store.dispatch({
  type: 'ADD',
  payload: 22
});

store.dispatch({
  type: 'SUBTRACT',
  payload: 80
});
