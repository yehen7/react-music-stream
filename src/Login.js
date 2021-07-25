import React from 'react'
import "./Login.css"
import { loginUrl } from './spotify'

function Login() {
    
    return (
        <div className="login">

            <img src="https://promo.ly/wp-content/uploads/2020/01/WhatSpotifysNewMarqueeAdToolMeansforArtistsandListeners_f7fa51c6517a69ae99ed1a6d42f53109_2000.png" alt=""/>
            <a href={loginUrl}>Login with spotify</a>

        </div>
    )
}

export default Login
