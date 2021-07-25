import React from 'react'
import './Player.css'
import Sidebar from './Siderbar'
import Footer from './Footer'
import Body from './Body'
function Player({s}) {
    return (
        <div className="player">
            <div className="palyer_body">
                <Sidebar/>
                <Body spotify={s}/>
            </div>
            <Footer/>
           
        </div>
    )
}

export default Player
