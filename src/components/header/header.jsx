import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import logo from "../../images/logo.png";
import WalletModal from "../modals/walletmodal"
import "./header.scss"

class header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalVisible:false
        }
    }
    

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    render() {
        const {modalVisible} = this.state;
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
               <button onClick={this.toggleModal}>Unlock Wallet</button>
            </div>
            <WalletModal show={modalVisible} onHide={() => this.setState({modalVisible:false})} />
        </header>
        )
    }
}

export default header