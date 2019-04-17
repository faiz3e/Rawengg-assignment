import React, { Component } from 'react';
import GenericLoaderSkeleton from '../../../home/pages/dashboard/GenericLoaderSkeleton';

class SmartLoaderWrapper extends Component {
  state = {
  }
  componentDidMount() {
  }

  render() {
    let data = this.props.data
    return (
      <div >
        {data.length > 0 ? this.props.children :
          [...Array(this.props.iterator || 1)].map((e, i) => <div key={i}>
            <GenericLoaderSkeleton style={this.props.loadingComponentStyle} />
          </div>)
        }
      </div>
    );
  }
}

export default SmartLoaderWrapper;
