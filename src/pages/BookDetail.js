import React from 'react';

class BookDetail extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const name = "abc";
        return (
            <>
                <h1>Hello {name}</h1>
            </>
        )
    }
}
export default BookDetail;