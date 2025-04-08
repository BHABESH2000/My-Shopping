// console.log("running");

let carts = document.querySelectorAll('.add_cart');
let totalprice;
let cartPrice = 0;


let products = [
    {
        name: 'Ladies Tops',
        tag: 'gray_shirt.jpg',
        price: 550,
        inCart: 0
    },
    {
        name: "Ladies Geans",
        tag: "pant_girl.jpg",
        price: 399,
        inCart: 0
    },
    {
        name: "Polo Shirt",
        tag: "polo-shirt.jpg",
        price: 399,
        inCart: 0
    },
    {
        name: "Blue Tops",
        tag: "shirt-girl.jpg",
        price: 299,
        inCart: 0
    },
    {
        name: "T-Shirt",
        tag: "t-shirts.jpg",
        price: 599,
        inCart: 0
    },
    {
        name: "Full shirt",
        tag: "tunic-shirt.jpg",
        price: 799,
        inCart: 0
    },
    {
        name: "Blue Tops",
        tag: "blue_top.jpg",
        price: 499,
        inCart: 0
    },
    {
        name: "Black Tops",
        tag: "black_top.jpg",
        price: 550,
        inCart: 0
    },
    {
        name: "Maroon Shoe",
        tag: "shoe-2.jpg",
        price: 459,
        inCart: 0
    },
    {
        name: "White Puma Shoe",
        tag: "shoe-1.jpg",
        price: 999,
        inCart: 0
    },
    {
        name: "Maroon Shoe",
        tag: "shoe-3.jpg",
        price: 699,
        inCart: 0
    },
    {
        name: "Silver Heel",
        tag: "shoe-4.jpg",
        price: 599,
        inCart: 0
    },
    {
        name: "Blue Shirt",
        tag: "top_rated_1.jpg",
        price: 499,
        incart: 0
    },
    {
        name: "Smart Watch",
        tag: "top_rated_1.jpg",
        price: 2999,
        inCart: 0
    },
    {
        name: "Red Jacket",
        tag: "top_rated_3.jpg",
        price: 699,
        inCart: 0
    },
    {
        name: "Black Jacket",
        tag: "best_selling_1.jpg",
        price: 999,
        inCart: 0
    },
    {
        name: "Puma Shoes",
        tag: "best_selling_2.jpg",
        price: 1200,
        inCart: 0
    },
    {
        name: "White T-Shirt",
        tag: "best_selling_3.jpg",
        price: 299,
        inCart: 0
    },
    {
        name: "Blue Handbag",
        tag: "on_sale_1.jpg",
        price: 899,
        inCart: 0
    },
    {
        name: "Black Sweatshirt",
        tag: "on_sale_2.jpg",
        price: 1099,
        inCart: 0
    },
    {
        name: "Black Sneakers",
        tag: "on_sale_3.jpg",
        price: 459,
        inCart: 0
    },
]


//   const totalcost = localStorage.getItem("totalCost")
//   console.log(totalcost)

    function totalClick(click){
        console.log("hello")
        const totalClicks = document.getElementById('totalClicks');
        let cartCost = localStorage.getItem('totalCost');
        console.log(cartCost);
        totalprice = cartCost + products.price
        const sumvalue = parseInt(totalClicks.innerText) + click;
        console.log(sumvalue + click);
        totalClicks.innerText = sumvalue;
        cartPrice = cartPrice + products.price
        console.log(cartPrice,products.price)

        //avoid negatives
        if(sumvalue < 0) {
            totalClicks.innerText = 0;
        }

        //reset value
        if(click === 0) {
            totalClicks.innerText = 0;
        }
    }   

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    // console.log("The Product clicked is", product);
    console.log('item.incart')
    
    let productNumbers = localStorage.getItem('cartNumbers');
    
   
    // console.log(typeof productNumbers);

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItem(product);

    // console.log(productNumbers);
     
    // console.log(typeof productNumbers);

    // localStorage.setItem('cartNumbers', 1);
}

function setItem(product) {
    // console.log("Inside of SetItems Function");
    console.log("My Product is", product);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log("My Cart Items are", cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
            [product.tag]: product
            }
        }
        
        // console.log(cartItems[product.tag]);

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    // console.log("The Product Price is",product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost); 
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
        // document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("totalCost", product.price);
        // document.querySelector('.cart span').textContent = 1;
    }

}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productsContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartCost,cartPrice,products.price);

    cartPrice = cartPrice + products.price

    // let totalprice = cartCost+item.price
    console.log(cartPrice)
    if(cartItems && productsContainer) {
        // console.log("running")
        productsContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productsContainer.innerHTML += `
            <div class="product-container">
            <div class="products">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ion-icon class="delete" name="close-circle"></ion-icon>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <img class= "abc"src="./images/${item.tag}" size:50px >
                
                <span>${item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <span class="price">Rs ${item.price}.00</span> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                <button class="btn-increment" onclick="totalClick(1)">+</button>
                <span id="totalClicks" ${item.inCart}>0</span>
               
        
                <button class="btn-decrement" onclick="totalClick(-1)">-</button>
                </span>


                
                
                
                
               
                
                <span></span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="total">
                Rs ${item.inCart * item.price}.00
                </span>
            </div>
            
            <div class="quantity">
            
            </div>
            
            </div>
            `;
        });
       productsContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    Rs${cartCost},00
                </h4>
        `;

        
    }
}
onLoadCartNumbers();
displayCart()





