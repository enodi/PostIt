import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import FlashMessageList from './components/flash/FlashMessageList';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <FlashMessageList />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
