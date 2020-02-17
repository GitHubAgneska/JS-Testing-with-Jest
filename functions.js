const axios = require('axios');
const functions = {

    // basics 
    add: (num1, num2) => num1 + num2,
    // <es6 add: function (num1, num2) { return num1 + num2 }
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Bojack'}
        user['lastName'] = 'Horseman';
        return user;
    },

    // asynchronous
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data )
        .catch( err => console.log('error', err))
        
    };


module.exports = functions;