import React from 'react'
import {NavLink} from "react-router-dom"
import Home from "../../pages/Home";
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
                   <NavLink activeClassName="active" className="nav-link" to={{pathname=Home}}>Home</NavLink>
                   <NavLink activeClassName="active" className="nav-link">Menu</NavLink>
                   <NavLink activeClassName="active" className="nav-link" target="_blank">Vote</NavLink>
                   <NavLink activeClassName="active" className="nav-link" target="_blank">About</NavLink>
                   <NavLink activeClassName="active" className="nav-link" target="_blank">FAQ</NavLink>
               </nav>
            </div>
        </header>
    )
}
export default header