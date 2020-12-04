import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ReactModal from 'react-modal';
import ReleasePDF from '../PDFs/ReleasePDF'
import { Container } from 'react-bootstrap'
import { PDFViewer } from '@react-pdf/renderer';



const customStyles = {
    overlay: {
        background: '#f2ebeb',
    },
    content : {
        background: '#1a1818'
    }
  };

const pdfStyles = {

}


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
          <Button onClick={this.handleOpenModal} variant='dark'>Preview Release Form</Button>
          <ReactModal 
            style={customStyles}
             isOpen={this.state.showModal}
          >
            <Button onClick={this.handleCloseModal}>X</Button>
            <bp />
            <bp />
            <Container style={{height: '100%'}}>
            <PDFViewer style={{width: '100%', height: "95%" }} >
              <ReleasePDF formData={this.props.formData} user={this.props.user} />
            </PDFViewer>  
            </Container>          
          </ReactModal>
        </div>
      );
    }
  }
  
  
export default ReleaseModal