import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import './App.css';


const mapStateToProps = state => ({
  appName: state.common.appName
});


class App extends Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
