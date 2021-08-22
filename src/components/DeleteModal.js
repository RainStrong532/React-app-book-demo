import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "../assets/styles/modalFormStyle.css"

//link https://react-bootstrap.netlify.app/components/modal/#modals

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    handleClose = () => { this.setState({ show: false }) };
    handleShow = () => { this.setState({ show: true }) };
    handleSubmit = () => {
        if (this.props.handleSubmit && this.props.data.id) {
            this.props.handleSubmit(this.props.data.id);
        }
        this.handleClose();
    }
    render() {
        const show = this.state.show;
        const { variant } = this.props; // const variant = this.props.variant;
        return (
            <>
                <Button variant={variant || "danger"} onClick={this.handleShow}>
                    Delete
                </Button>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Bạn đã chắc chắn muốn xóa sách có tên là <b>{this.props.data.name}</b> không?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Không
                        </Button>
                        <Button variant="danger" onClick={this.handleSubmit}>
                            Có
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    };
}
export default DeleteModal;