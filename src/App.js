import React,{useState} from 'react';

import './main.css';
import { Route,HashRouter,Routes, BrowserRouter ,useNavigate} from 'react-router-dom'

import { MainBoard } from './mainpage'
import { Error404 } from './error'

import {Parallax} from './parallax'

function PlayerPage(){
    return (
        <div className="center wrapper">

            <MainBoard />
        </div>
    )
}

function Root() {
    const navigate = useNavigate()
    const [routeType, setroute] = useState(true);
    const hmm = routeType ? "VINYL?" : "BACK2WORK" 
    return (
            <button className="vin" onClick={
                () => {
                    setroute(!routeType)
                    navigate(routeType ? "player" : '')
                }
            } >{hmm}</button>
    );
}

function App(){
    return (
        <HashRouter>
            <Root/>
            <Routes>
                <Route path="/player" element={<PlayerPage/>} />
                <Route path="/" element={<Parallax/>} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </HashRouter>
    )
}
export default App;
