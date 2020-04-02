import React from "react"
import Modal from "react-modal"

class MyModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: true
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
        <Modal>
           {this.children} 
        </Modal></div>
      );
    }
  }
  
  const props = {};

export default MyModal;