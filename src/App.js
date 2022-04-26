import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Home from './components/Home'
import User from './components/User'

function App() {

    useEffect(() => {
        document.title = "TJ.GG"
    })
    return (
        <Router>
            <Routes>
                <Route path="/user/:summonerName" element={
                    <User/>
                }/>
                <Route exact path="/" element={
                    <Home/>
                }/>
            </Routes>
        </Router>
    )
}

export default App;
