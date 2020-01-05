import React, { Component } from 'react';
//Style
import './App.css';
//Redux
// import {connect} from 'react-redux';
// import mapStoreToProps from '../redux/mapStoreToProps';
//React-Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// COMPONENTS
import Header from '../Header/Header';
//Routes
import Swatches from '../pages/swatches/swatches'
import Colors from '../pages/colors/colors'
class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Header />

                <div className="container">
                    <Route path="/" exact component={Swatches} />
                    <Route path="/colors" component={Colors} />
                </div>
            </div>
            </Router>
        );
    }
}

export default App;
