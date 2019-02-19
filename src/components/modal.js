import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    state = { show: false };
  
    showModal = (e) => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

    moveButton = () => { 
        const moveButton = this.props.data.moves.map((v, i) => {
            return (
              <h1 
              key={i} 
              onClick={() => {
                this.props.click(v.name)
                this.showModal()}} 
              className='m-button'>{v.name}
              </h1>
              )
        });

        return moveButton;
    }
      
    render() {
        const {type, power, pp} = this.props.data.moveInfo;
            return (
                <>
                <Popup show={this.state.show} handleClose={this.hideModal} >
                    <p className='m-name'>Cut</p>
                    <p className='m-info' style={{textTransform: 'capitalize'}}>Type: {type}</p>
                    {
                      !power ? <p></p> : <p className='m-info'>Power:{power}</p>
                    }
                    <p className='m-info'>PP: {pp}</p>
                </Popup>
                {this.moveButton()}
                </>
            );
    }
  }
  
  const Popup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <button className='close-button' onClick={handleClose}>X</button>
          {children}
        </section>
      </div>
    );
  };

  export default Modal;