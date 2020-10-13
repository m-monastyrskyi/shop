import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Homepage}/>
                    <Route path={"/hats"} component={Homepage}/>
                </Switch>
            </Router>
        </main>
    );
}

export default App;
