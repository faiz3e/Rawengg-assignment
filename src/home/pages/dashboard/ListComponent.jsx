import React, { Component } from 'react';
import { Button } from '../../../common/components';
import Log from '../../../common/helpers/logger';
import SmartLoaderWrapper from '../../../common/components/SmartLoaderWrapper/SmartLoaderWrapper';
import { ListComponentStyle } from "./ListComponent.style";
class ListComponent extends Component {
  state = {
    counter: 4,
    users: []
  }
  componentDidMount() {
    const newList = [{user:'a'},{user:'b'},{user:'c'},{user:'e'},{user:'d'}]
    setTimeout(() => {
      this.setState({ users: [...this.state.users, ...newList] });
    }, 2000);
  }

  render() {
    return (
      <div >
          ***List***
        <SmartLoaderWrapper data={this.state.users} iterator={5} loadingComponentStyle={ListComponentStyle} >
          {this.state.users.length > 0 && this.state.users.map((items) => {
            return (
              <div key={items.user}>{console.log("items", items)
              } {items.user}</div>
            )
          })}
        </SmartLoaderWrapper>
      </div>
    );
  }
}

export default ListComponent;
