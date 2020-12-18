import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {User} from './pages'

import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={['/', '/home', '/store']} component={User}/>
        <Route exact path='/admin' />
      </Switch>
    </div>
  );
}

export default App;
