import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import BookListComponent from '../components/BookListComponent'
import ModalForm from '../components/ModalForm';

import { createBook, getListBook } from '../fetchApi/book'

class BookListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listBook: [],
            isLoading: false,
        }
    }

    getListBookFromContainer = async (setloading) => {
        if(setloading)
            this.setState({ isLoading: true });
        try {
            const res = await getListBook();
            this.setState({ listBook: [...res] });
        } catch (err) {
            alert(err);
        }finally{
            if(setloading)
                this.setState({ isLoading: false });
        }
    }
    handleSubmit = async (data) => {
        try {
            await createBook(data);
            this.getListBookFromContainer() // Lấy lại dữ liệu sau khi thêm thành công
        } catch (err) {
            alert(err);
        }
    }
    componentDidMount() {
        this.getListBookFromContainer();
    }
    render() {
        return (
            <Container>
                <h1>Trang danh sách sách</h1>
                <ModalForm
                    actions="Thêm mới"
                    title="Thêm mới sách"
                    variant="success"
                    handleSubmit={this.handleSubmit}
                />
                <span className="mb-3 d-block"></span>
                {
                    this.state.isLoading
                        ?
                        <Spinner className="mt-5" animation="border" role="status" size="xl">
                        </Spinner>
                        :
                        <BookListComponent
                            listBook={this.state.listBook}
                            getListBook={this.getListBookFromContainer}
                        />
                }
            </Container>
        )
    }
}
export default BookListContainer;