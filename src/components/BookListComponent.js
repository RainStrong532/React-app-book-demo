import React from 'react';
import { Table } from 'react-bootstrap';
import ModalForm from './ModalForm';
import DeleteModal from './DeleteModal';
import { deleteBook, updateBook } from '../services/book';

class BookListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
    }
    updateBookFromComponent =  async (data) => {
        try{
            await updateBook(data);
            if(this.props.getListBook){
                this.props.getListBook(0);
            }
        }   catch(err){
            alert(err);
        } 
    }
    deleteBookFromComponent =  async (data) => {
        try{
            await deleteBook(data);
            if(this.props.getListBook){
                this.props.getListBook(0);
            }
        }   catch(err){
            alert(err);
        } 
    }

    render() {
        let listBook = [];
        if (this.props.listBook) {
            listBook = this.props.listBook.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.author}</td>
                        <td>{item.description}</td>
                        <td>{item.price} vnđ</td>
                        <td>
                            <ModalForm
                                actions="Cập nhật"
                                title={`Cập nhật sách ${item.name} có id là ${item.id}`}
                                data={item}
                                handleSubmit={this.updateBookFromComponent}
                            />
                            <span className="m-3"></span>
                            <DeleteModal
                                handleSubmit={this.deleteBookFromComponent}
                                data={item}
                            />
                        </td>
                    </tr>
                )
            });
        }
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Auhtor</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listBook
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default BookListComponent;