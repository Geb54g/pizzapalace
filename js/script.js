let carts = document.querySelectorAll('.btn');
let foodItems=[
    {
        name:'BBQ chicken',
        small:400,
        medium:600,
        large:900,
        incart:0,
    },
    {
        name:'Hawaiian',
        small:600,
        medium:900,
        large:1400,
        incart:0,
    },
    {
        name:'Pepperoni',
        small:500,
        medium:800,
        large:1100,
        incart:0,
    },
    {
        name:'cheesy',
        small:550,
        medium:850,
        large:1200,
        incart:0,
    },
    {
        name:'crispy',
        small:70,
        medium:80,
        large:100,
        incart:0,
    },
    {
        name:'gluten free',
        small:80,
        medium:100,
        large:120,
        incart:0,
    },{
        name:'stuffed',
        small:50,
        medium:70,
        large:100,
        incart:0,
    },
    {
        name:'sausage',
        small:70,
        medium:95,
        large:120,
        incart:0,
    },
    {
        name:'olives',
        small:50,
        medium:90,
        large:100,
        incart:0,
    },
    {
        name:'pepperoni',
        small:100,
        medium:120,
        large:150,
        incart:0,
    },
    {
        name:'mushroom',
        small:60,
        medium:80,
        large:90,
        incart:0,  
    },
    {
        name:'delivery',
        price:350,
    },
]
 for(i = 0; i < carts.length; i++ ){
        carts[i].addEventListener('click',()=>{
            cartItems();
        })
}
function cartItems(){
    let products = localStorage.getItem('cartItems');
    products= parseInt(products);

    if(products ){
        localStorage.setItem('cartItems',1);
    }
}


