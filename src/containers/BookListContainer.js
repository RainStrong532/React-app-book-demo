import React from 'react';
import { Container } from 'react-bootstrap';
import BookListComponent from '../components/BookListComponent'
import ModalForm from '../components/ModalForm';

import {createBook, getListBook} from '../fetchApi/book'

class BookListContainer extends React.Component {
    constructor(props){
        super(props);
        this.getListBookFromContainer = this.getListBookFromContainer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            listBook: []
        }
    }

    getListBookFromContainer = async function(){
        try{
            const res = await getListBook();
            this.setState({listBook: [...res]});
        }catch(err){
            alert(err);
        }
    }
    handleSubmit =  async function(data){
        try{
            await createBook(data);
            this.getListBookFromContainer() // Lấy lại dữ liệu sau khi thêm thành công
        }catch(err){
            alert(err);
        }
    }
    componentDidMount(){
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
                <BookListComponent listBook={this.state.listBook} getListBook={this.getListBookFromContainer}/>
            </Container>
        )
    }
}
export default BookListContainer;