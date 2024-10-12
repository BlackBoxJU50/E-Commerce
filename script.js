const product = [
    {  
        id: 1,
        name: "Mobile",
        price: 100,
        image: "Screenshot_11.png",
    },
    {  
        id: 2,
        name: "Laptop",
        price: 100,
        image: "Screenshot_11.png",
    },
    {  
        id: 3,
        name: "PC",
        price: 100,
        image: "Screenshot_11.png",
    }
];

let totalPrice = 0;
let cartItems = [];

function getProductImage(products) {
    const productImage = document.createElement('img');
    productImage.src = products.image;
    productImage.alt = products.name;
    productImage.classList.add("w-full", "mb-4");
    return productImage;
}

function getProductName(name) {
    const productName = document.createElement('h3');
    productName.innerText = name;
    productName.classList.add('font-bold', 'text-xl');
    return productName;
}

function getAddtoCarButton(products) {
    const addTocart = document.createElement('button');
    addTocart.innerHTML = "Add TO Cart";
    addTocart.classList.add('cart-button', 'p-4', 'bg-blue-300', 'rounded', 'shadow', 'hover:bg-black', 'hover:text-white');
    addTocart.addEventListener('click', function() {
        addToCart(products);
    });
    return addTocart;
}

function getRemoveFromCartButton(products) {
    const removeFromCart = document.createElement('button');
    removeFromCart.innerHTML = "Remove";
    removeFromCart.classList.add('remove-button', 'p-2', 'bg-red-500', 'rounded', 'shadow', 'hover:bg-red-700', 'hover:text-white');
    removeFromCart.addEventListener('click', function() {
        removeFromCartHandler(products.id);
    });
    return removeFromCart;
}

function addToCart(products) {
    cartItems.push(products);
    totalPrice += products.price;
    renderCart();
}

function removeFromCartHandler(productId) {
    const index = cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
        totalPrice -= cartItems[index].price;
        cartItems.splice(index, 1);
        renderCart();
    }
}

function renderCart() {
    const cart = document.getElementById('cart-items');
    cart.innerHTML = "";
    
    cartItems.forEach((item) => {
        const cartElement = document.createElement('div');
        cartElement.classList.add("cart-item", "p-4", "bg-gray-100", "mb-2", "flex", "justify-between", "items-center");
        
        const cartText = document.createElement('p');
        cartText.innerHTML = `${item.name} - $${item.price}`;
        cartElement.appendChild(cartText);
        
        const removeButton = getRemoveFromCartButton(item);
        cartElement.appendChild(removeButton);
        
        cart.appendChild(cartElement);
    });

    const totalElement = document.getElementById('total-price');
    totalElement.innerText = "Total Price: $" + totalPrice;
}

function getProductCart(products) {
    const cart = document.createElement('div');
    cart.classList.add("bg-white", "p-5", "shadow", "rounded");

    const productImage = getProductImage(products);
    cart.appendChild(productImage);

    const productName = getProductName(products.name);
    cart.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.classList.add("text-xl");
    productPrice.innerText = "$" + products.price;
    cart.appendChild(productPrice);

    const addTocartButton = getAddtoCarButton(products);
    cart.appendChild(addTocartButton);

    return cart;
}

function renderproduct() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    product.forEach(function(products) {
        const productCard = getProductCart(products);
        productList.appendChild(productCard);
    });
}

renderproduct();
