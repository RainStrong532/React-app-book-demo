import React from 'react';
import { Table } from 'react-bootstrap';

class BookListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let listBook = [];

        if (this.props.listBook) {
            listBook = this.props.listBook.map(function (item, index) {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.author}</td>
                        <td>{item.description}</td>
                        <td>{item.price} vnđ</td>
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