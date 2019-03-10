import React, { Component } from 'react';
import { Button } from '../../../common/components';

class PageNotFound extends Component {

  jumpToHome = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div >
        <div>404 Page not found</div>
        <br />
        <div>Go to home page instead</div>
        <br />
        <Button title='HOME' type='button' onClicked={
          () => this.jumpToHome
        } />
      </div>
    );
  }
}

export default PageNotFound;
