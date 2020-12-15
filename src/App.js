import React from 'react'
import {Route} from 'react-router-dom'
import {Home} from './pages'
import {ProductCart} from './components'

import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
    </div>
  );
}

export default App;
