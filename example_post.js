import axios from 'axios';

axios.post('http://127.0.0.1:3000/', {
        token: 'dark_test',
        user: 'Silva',
        email: 'zaronymogamer@gmail.com',
        password: 'd662165f24aae07a86595d8f646b'
    })
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })