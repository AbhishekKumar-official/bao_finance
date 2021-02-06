import React from 'react'
import {Link} from "react-router-dom"
import "./footer.scss"
const footer = () => {
    return (
        <footer>
            <nav>
                   <a href="https://etherscan.io/address/0xBD530a1c060DC600b951f16dc656E4EA451d1A2D" target="__blank">BaoChef Contract</a>
                   <a href="https://app.uniswap.org/#/swap?inputCurrency=0x374cb8c27130e2c9e04f44303f3c8351b9de61c1&outputCurrency=ETH" target="__blank">Uniswap BAO-ETH</a>
                   <a href="https://discord.com/invite/BW3P62vJXT" target="__blank">Discord</a>
                   <a href="https://twitter.com/thebaoman" target="__blank">Twitter</a>
            </nav>
        </footer>
    )
}

export default footer
