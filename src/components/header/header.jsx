import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../images/logo.png";
import "./header.scss"
const header = () => {
    return (
        <header>
            <div className="navbar">
               <a href="javascript:void(0)" className="logo">
                <img src={logo} alt="logo"/>
                <span>Bao.Finance 
                    <span className="script">BaoChef</span>
                </span>
               </a> 
               <nav>
                   <Link activeClassName="active" className="nav-link active" to="/">Home</Link>
                   <Link activeClassName="active" className="nav-link">Menu</Link>
                   <Link activeClassName="active" className="nav-link" target="_blank">Vote</Link>
                   <Link activeClassName="active" className="nav-link" target="_blank">About</Link>
                   <Link activeClassName="active" className="nav-link" target="_blank">FAQ</Link>
               </nav>
               <button>Unlock Wallet</button>
            </div>
        </header>
    )
}
export default header