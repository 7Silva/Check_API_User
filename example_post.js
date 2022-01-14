import axios from 'axios';

axios.post('http://127.0.0.1:3000/', {
        token: 'API_acess_token',
        user: 'Registered_user',
        email: 'Registered_email',
        password: 'Registered_Password'
    })
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })