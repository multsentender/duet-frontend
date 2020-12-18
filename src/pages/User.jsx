import React from 'react';
import {Route} from 'react-router-dom'
import {Home, Store} from '../modules'
import {Header, Footer} from '../components'

const User = () => {
    return (
        <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/store' component={Store}/>
            <Footer/>
        </div>
    )
}

export default User