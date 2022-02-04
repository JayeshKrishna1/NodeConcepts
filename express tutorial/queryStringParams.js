const express = require('express');
const {products,people} = require('./data.js');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>this is a home page</h1><a href="/api/students">Students</a><a href="/api/products">Products</a><a href="/api/people">People</a>');
})


app.get('/api/students',(req,res)=>{
    res.json([{name : 'Jayesh', password : 123},{name : 'Krishna', password : 456}]);
});

//in real world we may  not need the entire info about the product so we sending the specified property of products
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image,price} = product;
        return {id,name,image,price};
    });
    res.json(newProducts);
});

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID));
    if(!singleProduct){ // if the user enters an invalid id which doesnt exsist
        return res.status(404).send('page not found');
    }
    return res.json(singleProduct);

});

app.get('/api/product/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query;
    let sortedProduct = [...products];
    if(search){
        sortedProduct = products.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProduct = products.slice(0,limit);
        return res.json(sortedProduct);
    }
    if(sortedProduct.length<1){
        return res.status(200).json([{success : 'true', data : []}]);
    }
    res.json(sortedProduct); // as here we have more than 1 res for a single req we will get error in server side. Inorder to avoid we use return
})
app.get('/api/people',(req,res)=>{
    res.json(people);
});

app.listen(5000,()=>{
    console.log('server is listening to port 5000....');
});