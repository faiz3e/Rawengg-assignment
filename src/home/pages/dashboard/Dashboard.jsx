import React, { Component } from 'react';
import { Button } from '../../../common/components';
import { connect } from 'react-redux'
import { doLogout } from '../login/ActionCreators';
import { selectLoginState, selectUserInfo } from '../login/selector';

class Dashboard extends Component {
  componentDidUpdate() {
    !this.props.isLoggedIn &&
      this.props.history.push('/login')
  }

  render() {
    return (
      <React.Fragment >
        <div>Dashboard</div>
        <br />
        <h3>logged in with account {this.props.userEmailId} </h3>
        <Button title='LOGOUT' onClicked={
          () => this.props.logout
        } />
      </React.Fragment>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    isLoggedIn: selectLoginState(state),
    userEmailId: selectUserInfo(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(doLogout())
  }
}

export default Dashboard = connect(mapStateToprops, mapDispatchToProps)(Dashboard)

