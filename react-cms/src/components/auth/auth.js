import React from 'react';
import { LoginContext } from './context.js';
import jsonwebtoken from 'jsonwebtoken';
import If from '../if/index.js';

class Auth extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          const user = context.token ? jsonwebtoken.verify(context.token, 'changeit') : {};
          const  { capability } = this.props;
          const okToRender = context.loggedIn && (capability ?user.capabilities.includes(capability) : true);
          return <If condition={okToRender}>{this.props.children}</If>
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Auth;