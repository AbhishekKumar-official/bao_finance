import React from 'react'
import {Link} from "react-router-dom"
import "./footer.scss"
const footer = () => {
    return (
        <footer>
            <nav>
                   <Link activeClassName="active" className="nav-link">BaoChef Contract</Link>
                   <Link activeClassName="active" className="nav-link">Uniswap BAO-ETH</Link>
                   <Link activeClassName="active" className="nav-link">Discord</Link>
                   <Link activeClassName="active" className="nav-link">Twitter</Link>
            </nav>
        </footer>
    )
}

export default footer
