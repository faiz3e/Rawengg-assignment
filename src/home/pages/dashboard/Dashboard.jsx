import React, { Component } from 'react';
import { Button } from '../../../common/components';
import { connect } from 'react-redux'
import { doLogout } from '../login/ActionCreators';
import { selectLoginState } from '../login/selector';

class Dashboard extends Component {
  componentDidUpdate(){
    !this.props.isLoggedIn&&
    this.props.history.push('/login')
  }
  render() {
    return (
      <React.Fragment >
        <div>Dashboard</div>
        <Button title='LOGOUT' onClicked={
          () => this.props.logout
        } />
      </React.Fragment>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    isLoggedIn: selectLoginState(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(doLogout())
  }
}

export default Dashboard = connect(mapStateToprops, mapDispatchToProps)(Dashboard)

