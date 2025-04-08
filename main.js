// console.log("running");

let carts = document.querySelectorAll('.add_cart');

let products = [
    {
        name: 'Ladies Tops',
        tag: 'c_formal_gray_shirt.jpg',
        price: 550,
        inCart: 0
    },
    {
        name: "Ladies Geans",
        tag: "c_pant_girl.jpg",
        price: 399,
        inCart: 0
    },
    {
        name: "Lightblue Polo Shirt",
        tag: "c_polo-shirt.jpg",
        price: 399,
        inCart: 0
    },
    {
        name: "Lightblue Shirt",
        tag: "c_shirt-girl.jpg",
        price: 299,
        inCart: 0
    },
    {
        name: "Jacket",
        tag: "c_t-shirt_men.jpg",
        price: 599,
        inCart: 0
    },
    {
        name: "Full Shirt",
        tag: "c_tunic-shirt_girl.jpg",
        price: 799,
        inCart: 0
    },
    {
        name: "Blue Tops",
        tag: "c_undershirt.jpg",
        price: 499,
        inCart: 0
    },
    {
        name: "Black Tops",
        tag: "c_western-shirt.jpg",
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
    }
]


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
    // console.log(cartItems);
    if(cartItems && productsContainer) {
        // console.log("running")
        productsContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productsContainer.innerHTML += `
            <div class="products">
                <ion-icon class="delete" name="trash"></ion-icon>
                <img src="./images/${item.tag}" size: >
                <span>${item.name}</span>
                <div class="price">Rs ${item.price}.00</div>
            
                <div class="quantity">
                <ion-icon class="decrease " name="caret-back-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="caret-forward-circle"></ion-icon>
                </div>

                <div class="total">
                    Rs ${item.inCart * item.price}.00
                </div>
            </div>
            
            `;
        });

    //     <script>
    //     let dltButton = document.createElement('button');
    //     dltButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    //     document.body.appendChild(dltButton);
    //     </script>

       productsContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    Rs ${cartCost}.00
                </h4>
                
        `;
    }
}
onLoadCartNumbers();
displayCart()

<span><ion-icon class="decrease" name="caret-back-circle"></ion-icon>
<ion-icon class="increase" name="caret-forward-circle"></ion-icon></span>


<span>${item.inCart}</span>
<span>
                <button class="btn-increment" onclick="totalClick(1)">+</button>
                <span id="totalClicks" ${item.inCart}>0</span>
                <span>${item.inCart}</span>
        
                <button class="btn-decrement" onclick="totalClick(-1)">-</button>
                </span>