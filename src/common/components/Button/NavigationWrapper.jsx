import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const NavigationWrapper = (props) => {
  return (
    <React.Fragment>
      {props.navigateTo ?
        <Link to={props.navigateTo}>{props.children}</Link>
        :
        <div>{props.children}</div>}
    </React.Fragment>
  )

}