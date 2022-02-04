const products = [
    {
        id : 1,
        name : 'cookie',
        price : 20
    },
    {
        id : 2,
        name : 'cake',
        price : 30
    },
    {
        id : 1,
        name : 'biscuits',
        price : 40
    }
]

// const newProducts = products.map((product) => {
//     const {id,name} = product;
//     return {id,name};
// });
const newProducts = products.map((product) => {
    const newProduct = { id : product.id, name : product.name};
    return newProduct;
});
console.log(newProducts);