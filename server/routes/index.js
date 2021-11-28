const productRouter=require('./product')
const accountRouter=require('./account')
function route(app){
    app.use('/api/products', productRouter)
    app.use('/api/account', accountRouter)
}

module.exports = route;