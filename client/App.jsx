import React from 'react';
import PropTypes from 'prop-types';

import Header from './src/components/Header/Header.jsx';

/**
 * This parent is the parent component of all other components
 * @class App
 * @classdesc main app component
 */
class App extends React.Component {

  /**
   * render - renders app component
   * @return {jsx} jsx
   */
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
