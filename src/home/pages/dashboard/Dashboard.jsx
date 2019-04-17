import React, { Component } from 'react';
import { Button } from '../../../common/components';
import { connect } from 'react-redux'
import { doLogout, createOfferAction } from '../login/ActionCreators';
import { selectLoginState, selectUserInfo } from '../login/selector';
import Log  from "../../../common/helpers/logger";
class Dashboard extends Component {
  state = {
    counter: 1
  }
  componentDidMount() { 
    Log.trace('Dashboard Component!', 'Mounting');
  }
  componentDidUpdate() {
    !this.props.isLoggedIn &&
      this.props.history.push('/login')
  }
  updateInputValue = (e) => {
    e.target.value = +e.target.value
    this.setState({
      counter: e.target.value
    })
  }

  callOffer = () => {
    console.log(`calling api ${this.state.counter} number of times `);
    this.props.createOffer(this.state.counter)
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
        <input type={'number'} value={this.state.counter} onChange={e => this.updateInputValue(e)} />

        <Button title='CREATE OFFER' onClicked={
          () => this.callOffer
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
    logout: () => dispatch(doLogout()),
    createOffer: (values) => dispatch(createOfferAction(values)),
  }
}

export default Dashboard = connect(mapStateToprops, mapDispatchToProps)(Dashboard)

