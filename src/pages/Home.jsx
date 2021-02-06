import React from 'react'
import logobanner from "../images/logo-banner.png";
import "./Home.scss"
const Home = (props) => {

    const handlePageChange = () => {
        props.history.push("/menu")
    }
    return (
        <div className="Home-Content">
            <div className="wrap-logo">
                <img src={logobanner} alt="logobanner"/>
                <h1>BaoChef is Ready</h1>
                <h3>Stake Uniswap LP tokens and earn BAO!</h3>
            </div>
            <h3>
                Be sure to read&nbsp;
                <a href="https://docs.bao.finance/" target="__blank">docs.bao.finance</a>&nbsp; 
                before using the pools so you are familiar with protocol risks and fees.!
            </h3>
            <div className="wrap-locked">
                <div className="wrap-row">
                    <div className="col">
                        <div className="col-top">
                            <img src={logobanner} alt="logobanner"/>
                            <span>
                                <h6>Your BAO Balance</h6>
                                <h1>Locked</h1>
                            </span>
                        </div>
                        <div className="col-bottom">
                            Pending harvest
                            <span>0.000 BAO</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col-top">
                            <span>
                                <h6>Total BAO Supply</h6>
                                <h1>Locked</h1>
                            </span>
                        </div>
                        <div className="col-bottom">
                            New rewards per block
                            <span>1.000 BAO</span>
                        </div>
                    </div>
                </div>
                <div className="wrap-row">
                    <div className="col">
                        <div className="col-top">
                            <span>
                                <h6>Your Referral Link:</h6><br/>
                                <h6>Your Referrals:</h6>
                                <h6 className="mb-0">Referrals</h6>
                            </span>
                        </div>
                        <div className="col-bottom">
                            Earn future rewards from referrals
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handlePageChange}>🔪 See the Menu</button>
            <h3 className="mb-24">🏆
                <b>Pro Tip</b>
                : BAO-ETH UNI-V2 LP token pool yields 32x more tokens than other pairs.
            </h3>
            <h3 className="mb-24">💲
                <b>Pro Tip</b>
                : The affiliate links from the "Buy X" buttons generate revenue for the Bao Treasury which Bao holders own. <br />
                Even if you already trade at these exchanges consider creating a new account to help grow the protocol.
            </h3>
            <h3>❗️
                <b>Disclaimer</b>
                : Bao is currently in alpha and has a one-person engineering team. <br />
                While we are scaling, there may be higher than normal risk of bugs and we may be slower in being able to respond to them.<br />
                Please partake accordingly.<br />
                The service is provided as-is.
            </h3>
        </div>
    )
}

export default Home
