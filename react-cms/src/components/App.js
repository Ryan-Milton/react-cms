import React from 'react';
import LoginContext from './auth/context.js';
import Login from "./auth/login.js";
import Auth from "./auth/auth.js";

import RecordList from './record/list.js';

class App extends React.Component {
  render() {
    return (
      <LoginContext>
        <Login />
        <hr />
        <Auth>
          <div>
            <h2>Teams</h2>
            <RecordList model="teams" />
          </div>
        </Auth>
      </LoginContext>
    );
  }
}

export default App;