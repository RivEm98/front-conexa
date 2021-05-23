import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Photos from './pages/Photos'
import './App.css'

function App(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/photos" component={Photos} />
            
        </BrowserRouter>
    )
};
export default App;
