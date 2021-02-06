import React from 'react'
import {Button,Modal} from 'react-bootstrap';
import './walletmodal.scss'


const WalletModal = (props) => {
    return (
              <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="connectwallet-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  Connect to a wallet
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <span>
                    <button>
                      <h6>Install Metamask</h6>
                   
                    </button>
                    <button>
                      <h6>WalletConnect</h6>
                      
                    </button>
                    <button>
                      <h6>Coinbase Wallet</h6>

                    </button>
                    <button>
                      <h6>Fortmatic</h6>
                    
                    </button>
                    <button>
                      <h6>Portis</h6>
                    
                    </button>
                  </span>
                  <p>New to Ethereum?&nbsp;&nbsp;
                  <a target="_blank" href="javascript:void(0)">Learn more about wallets</a>
                  </p>
                </Modal.Body>
              </Modal>
            );
          }

 export default WalletModal