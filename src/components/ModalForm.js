import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "../assets/styles/modalFormStyle.css"

//link https://react-bootstrap.netlify.app/components/modal/#modals

class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            book: {
                id: null,
                name: "",
                author: "",
                price: 0,
                description: "",
            }
        }
    }
    handleClose = () => { this.setState({ show: false }) };
    handleShow = () => { this.setState({ show: true }) };
    handleSubmit = () => {
        if (this.props.handleSubmit) {
            this.props.handleSubmit(this.state.book);
        }
        this.handleClose();
    }
    componentDidUpdate(prevProps){
        if(prevProps.title !== this.props.title){
            const book = { ...this.props.data };
            this.setState(state => ({
                book: { ...state.book, ...book },
            }));
        }
    }

    componentDidMount() {
        if (this.props.data) {
            const book = { ...this.props.data };
            this.setState(state => ({
                book: { ...state.book, ...book },
            }));
        }
    }
    render() {
        const show = this.state.show;
        const actions = this.props.actions || "Thêm mới"; // nếu ko truyền props actons thì sẽ là "Thêm mới"
        const title = this.props.title || "Untitle";
        const { variant } = this.props; // const variant = this.props.variant;
        const book = this.state.book;
        return (
            <>
                <Button variant={variant || "primary"} onClick={this.handleShow}>
                    {actions}
                </Button>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Tên sách</Form.Label>
                                <Form.Control type="text" value={book.name} placeholder="Nhập tên sách"
                                    onChange={(e) => this.setState(state => ({ book: { ...state.book, name: e.target.value}}))}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Tác giả</Form.Label>
                                <Form.Control type="text" value={book.author} placeholder="Nhập tên tác giả"
                                    onChange={(e) => this.setState(state => ({ book: { ...state.book, author: e.target.value}}))}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Giá</Form.Label>
                                <Form.Control type="number" min="0" value={book.price} placeholder="Nhập giá"
                                    onChange={(e) => this.setState(state => ({ book: { ...state.book, price: parseInt(e.target.value) } }))}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control as="textarea" rows={3} value={book.description} placeholder="Nhập mô tả"
                                     onChange={(e) => this.setState(state => ({ book: { ...state.book, description: e.target.value}}))}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Lưu thay đổi
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    };
}
export default ModalForm;