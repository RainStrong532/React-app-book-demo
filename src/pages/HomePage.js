import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Trang chủ</h1>
                <h5>
                    <a href="/books">
                        Danh sách sách
                    </a>
                </h5>
            </div>
        )
    }
}
export default HomePage;