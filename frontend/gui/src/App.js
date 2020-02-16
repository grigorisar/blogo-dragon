import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css'; //or 'amtd/dist/antd.less
import * as actions from './store/actions/auth'

import CustomLayout from './containers/Layout';


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }


  render() {
    return (
      <div>
        <Router>
        { /* this passes isAuthenticated to CustomLayout */}
          <CustomLayout {...this.props}> 
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

// Mapping value contained in the state

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
