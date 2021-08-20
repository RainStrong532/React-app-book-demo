import React from 'react';
import { Container, Spinner, Button, FormControl } from 'react-bootstrap';
import BookListComponent from '../components/BookListComponent'
import ModalForm from '../components/ModalForm';

import { createBook, getListBook } from '../services/book'

class BookListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listBook: [],
            listSearch: [],
            searching: false,
            isLoading: false,
            textSearch: ""
        }
    }

    getListBookFromContainer = async () => {
        try {
            const res = await getListBook();
            this.setState({ listBook: [...res] });
        } catch (err) {
            alert(err);
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

    onSearch = () => {
        if(!this.state.searching){
            this.setState({searching: true});
        }
        let text = this.state.textSearch;
        let listSearch = this.state.listBook;
        if(text){
            listSearch = listSearch.filter((item) => {
                return item.name.includes(text);
            })
        }
        this.setState({listSearch: listSearch})
    }

    componentDidMount() {
        this.getListBookFromContainer();
    }
    render() {
        let searching = this.state.searching;
        let listSearch = this.state.listSearch;
        let listBook = this.state.listBook;
        return (
            <Container>
                <h1>Trang danh sách sách</h1>
                <ModalForm
                    actions="Thêm mới"
                    title="Thêm mới sách"
                    variant="success"
                    handleSubmit={this.handleSubmit}
                />
                <div className="w-25 d-flex mt-4">
                    <FormControl className="flex-grow" type="text" placeholder="Tìm kiếm" value={this.state.textSearch}
                        onChange={(e) => {
                            this.setState({textSearch: e.target.value})
                        }}
                    />
                    <Button style={{whiteSpace: 'nowrap'}}
                        onClick={this.onSearch}
                    >Tìm kiếm</Button>
                </div>
                <span className="mb-3 d-block"></span>
                {
                    this.state.isLoading
                        ?
                        <Spinner className="mt-5" animation="border" role="status" size="xl">
                        </Spinner>
                        :
                        (searching && listSearch.length === 0)
                        ?
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis rem accusantium nam qui commodi illo culpa? Molestias libero aliquid odio cupiditate, repellat saepe, sapiente officiis ex error voluptatibus qui.</p>
                        :
                        <BookListComponent
                            listBook={searching ? listSearch : listBook}
                            getListBook={this.getListBookFromContainer}
                        />
                }
            </Container>
        )
    }
}
export default BookListContainer;