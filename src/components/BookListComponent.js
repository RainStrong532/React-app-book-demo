import React from 'react';
import { Table } from 'react-bootstrap';
import ModalForm from './ModalForm';
import DeleteModal from './DeleteModal';
import { deleteBook, updateBook } from '../fetchApi/book';

class BookListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.updateBookFromComponent = this.updateBookFromComponent.bind(this);
        this.deleteBookFromComponent = this.deleteBookFromComponent.bind(this);
        this.state = {
        }
    }
    updateBookFromComponent =  async function(data) {
        try{
            await updateBook(data);
            if(this.props.getListBook){
                this.props.getListBook();
            }
        }   catch(err){
            alert(err);
        } 
    }
    deleteBookFromComponent =  async function(data) {
        try{
            await deleteBook(data);
            if(this.props.getListBook){
                this.props.getListBook();
            }
        }   catch(err){
            alert(err);
        } 
    }
    render() {
        let listBook = [];
        const updateBookFromComponent = this.updateBookFromComponent;
        const deleteBookFromComponent = this.deleteBookFromComponent;

        if (this.props.listBook) {
            listBook = this.props.listBook.map(function (item, index) {
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
                                title={`Cập nhật sách với tên ${item.name}`}
                                data={item}
                                handleSubmit={updateBookFromComponent}
                            />
                            <span className="mr-3"></span>
                            <DeleteModal
                                handleSubmit={deleteBookFromComponent}
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