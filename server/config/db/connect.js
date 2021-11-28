const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:1234@shopfashion.8s3mg.mongodb.net/ShopFashion?retryWrites=true&w=majority');
        console.log('Connect success to DB')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect;