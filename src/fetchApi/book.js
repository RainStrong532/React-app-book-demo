import {DOMAIN_API} from '../contants'

export const getListBook = function(){
    return new Promise((resolve, reject) => {
        const URL = DOMAIN_API + 'books';

        fetch(URL, {
            method: 'GET',
            // 'Content-Type': 'application/json', // sử dụng khi cần truyền dữ liệu vào body
            // body: JSON.stringify(data)
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    })
}