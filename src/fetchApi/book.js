import { DOMAIN_API } from '../contants'

export const getListBook = function () {
    return new Promise((resolve, reject) => {
        const URL = DOMAIN_API + 'books';
        fetch(URL, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json', // sử dụng khi cần truyền dữ liệu vào body
            // },
            // body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                let a = res.map(item => {
                    return { ...item, book_id: item.id }
                })
                resolve(a);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const createBook = function (data) {
    data.id = data.book_id;
    return new Promise((resolve, reject) => {
        console.log(data, "data");
        const URL = DOMAIN_API + 'books';

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const updateBook = function (data) {
    return new Promise((resolve, reject) => {
        const URL = DOMAIN_API + 'books/' + data.book_id;

        fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const deleteBook = function (book_id) {
    return new Promise((resolve, reject) => {
        const URL = DOMAIN_API + 'books/' + book_id;

        fetch(URL, {
            method: 'DELETE',
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    })
}