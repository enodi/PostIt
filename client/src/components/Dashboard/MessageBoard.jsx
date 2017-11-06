import React from 'react';
import Sidebar from './Sidebar.jsx';
import PostMessageContainer from './Message/PostMessageContainer.jsx';

const MessageBoard = props => (
  <div>
    <Sidebar/>
    <PostMessageContainer/>
  </div>
);

export default MessageBoard;
