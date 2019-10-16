import React, {Component} from 'react';
import {
    Button, 
    Modal,
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state={
        modal:false, 
        name: ''
    }
    toggle = () => {
       return(  this.setState({
            modal: !this.state.modal
        }))
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit = (e) =>{
        e.preventDefault(); 
        const newItem = {
            name: this.state.name
        }
        //add item via AddITem action 
        this.props.addItem ( newItem ); 
        // close the modal  
        this.setState({
            modal: !this.state.modal
        })  
    }
    render(){
        return(
            <div color="dark"style={{marginBottom:'2rem'}} onClick={this.toggle}>
                <Button>Add Item </Button>
                <Modal isOpen={this.state.modal}toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Adding Shopping Items" onChange={this.onChange} />
                                <Button color="dark" style={{marginTop:'2rem'}}  block >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(
     mapStateToProps,
    { addItem }
)(ItemModal);