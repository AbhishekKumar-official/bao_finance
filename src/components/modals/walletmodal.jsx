import React from 'react'
import {Button,Modal} from 'react-bootstrap';
import metamaskfox from "../../images/metamask-fox.svg";
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
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Select a wallet provider.
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="wrap">
                    <div className="wrap-inner">
                      <div className="wrap-box">
                        <div className="wrap-img-box">
                          <img src={metamaskfox} alt="metamaskfox"/>
                        </div>
                        <span>Metamask</span>
                        <button>Connect</button>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button>Cancel</button>
                </Modal.Footer>
              </Modal>
            );
          }

 export default WalletModal