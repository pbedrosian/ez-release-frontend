import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ReactModal from 'react-modal';

const customStyles = {
    overlay: {
        background: '#f2ebeb',
    },
    content : {
        background: '#1a1818'
    }
  };


class ReleaseModal extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <Button onClick={this.handleOpenModal}>Preview Release Form</Button>
          <ReactModal 
            style={customStyles}
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <Button onClick={this.handleCloseModal}>X</Button>
          </ReactModal>
        </div>
      );
    }
  }
  
  
export default ReleaseModal