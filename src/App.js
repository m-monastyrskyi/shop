import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./components/Header";

function App() {
    return (
        <main>
            <Router>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={Homepage}/>
                    <Route path={"/shop"} component={ShopPage}/>
                </Switch>
            </Router>
        </main>
    );
}

export default App;
