import React from 'react';
import { Container } from 'react-bootstrap';
import BookListComponent from '../components/BookListComponent'

import {getListBook} from '../fetchApi/book'

class BookListContainer extends React.Component {
    constructor(props){
        super(props);
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
    componentDidMount(){
        this.getListBookFromContainer();
    }
    render() {
        return (
            <Container>
                <h1>Trang chủ</h1>
                <BookListComponent listBook={this.state.listBook}/>
            </Container>
        )
    }
}
export default BookListContainer;