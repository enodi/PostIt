import React from 'react';
import PropTypes from 'prop-types';
import Header from './src/components/Header/index.jsx';

 /* eslint-disable react/prefer-stateless-function */
/**
 * @class App
 * @classdesc main app component
 */
class App extends React.Component {

  /**
   * render - renders app component
   * @return {object} the component view
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
