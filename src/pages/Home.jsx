import React from 'react'
import logobanner from "../images/logo-banner.png";
import "./Home.scss"
const Home = () => {
    return (
        <div className="Home-Content">
            <div className="wrap-logo">
                <img src={logobanner} alt="logobanner"/>
                <h1>BaoChef is Ready</h1>
                <h3>Stake Uniswap LP tokens and earn BAO!</h3>
            </div>
            <h3>
                Be sure to read&nbsp;
                <a href="javascript:void(0)">docs.bao.finance</a>&nbsp; 
                before using the pools so you are familiar with protocol risks and fees.!
            </h3>
            <div className="wrap-locked">
                <div className="wrap-row-one">
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
