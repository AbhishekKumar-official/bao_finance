import React, {Component} from 'react'
import WalletModal from "../components/modals/walletmodal"
import "./Menu.scss"


class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: false
        }
    }

    toggleModal = () => {
        this.setState({
            show: !this.state.show
        })
    }
    
    render() {
        const {show} = this.state;
        return (
            <div className="Menu-Content">
            <button onClick={this.toggleModal}>🔓 Unlock Wallet</button>
            <WalletModal show={show} onHide={() => this.setState({show:false})} toggleModalfn={this.toggleModal} />
        </div>
        )
    }
}

export default Menu
