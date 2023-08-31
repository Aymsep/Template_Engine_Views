const express = require('express')
const app = express()
const PORT = process.env.PORT || 8500


app.set('view engine', 'ejs')
app.use(express.static('public'))

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];


app.get('/products',  (req, res)=> {
    res.render('products',{products})
})

    app.get('/product/:id', (req, res)=> {
        const productId = req.params.id;
        const productFound = products.find(item=>item.id==productId)
        console.log('product',productFound)
        if(productFound){
            return res.render('productDetails',{productFound})
        }
        return res.render('404')
    })


app.use((req, res)=> {
    res.render('404')
})


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})