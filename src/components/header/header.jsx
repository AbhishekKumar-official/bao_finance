import React ,{Component} from 'react'
import {NavLink, withRouter} from "react-router-dom"
import logo from "../../images/logo.png";
import WalletModal from "../modals/walletmodal"
import "./header.scss"

class header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalVisible:false,
            home:true,
            menu:false
        }
    }
    
    handlePageChange = () => {
        this.props.history.push("/home")
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    render() {
        const {modalVisible,home,menu} = this.state;
        return (
            <header>
            <div className="navbar">
               <a href="javascript:void(0)" onClick={this.handlePageChange} className="logo">
                <img src={logo} alt="logo"/>
                <span>Bao.Finance 
                    <span className="script">BaoChef</span>
                </span>
               </a> 
               <nav>
                   <NavLink activeClassName="active" to="/home">Home</NavLink>
                   <NavLink activeClassName="active" to="/menu">Menu</NavLink>
                   <a href= "https://snapshot.page/#/baovotes.eth" target="__blank">Vote</a>
                   <a href= "https://docs.bao.finance/" target="__blank">About</a>
                   <a href= "https://docs.bao.finance/" target="__blank">FAQ</a>
               </nav>
               <span className="nav-btn">
                <button onClick={this.toggleModal}>Unlock Wallet</button>
               </span>
            </div>
            <WalletModal show={modalVisible} onHide={() => this.setState({modalVisible:false})} toggleModal={this.toggleModal}/>
        </header>
        )
    }
}

export default withRouter(header) 