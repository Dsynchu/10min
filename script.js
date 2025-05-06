let cart = [];
const cartCount = document.getElementById("cart-count");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsList = document.getElementById("cart-items-list");
const cartTotal = document.getElementById("cart-total");
const productDetail = document.getElementById("product-detail");
const detailImage = document.getElementById("detail-image");
const detailName = document.getElementById("detail-name");
const detailPrice = document.getElementById("detail-price");
const detailDelivery = document.getElementById("detail-delivery");
const detailDescription = document.getElementById("detail-description");
const detailAddToCart = document.getElementById("detail-add-to-cart");
const closeDetail = document.getElementById("close-detail");

function getProductById(productId) {
  const products = [
    { id: 1, name: "Apple", price: 150, unit: "kg", description: "Fresh, juicy apples sourced from local farms.", image: "https://via.placeholder.com/150?text=Apple" },
    { id: 2, name: "Banana", price: 60, unit: "dozen", description: "Ripe yellow bananas, perfect for a quick snack.", image: "https://via.placeholder.com/150?text=Banana" },
    { id: 3, name: "Tomato", price: 40, unit: "kg", description: "Red, ripe tomatoes for your cooking needs.", image: "https://via.placeholder.com/150?text=Tomato" },
    { id: 4, name: "Potato", price: 30, unit: "kg", description: "Versatile potatoes for fries, curries, and more.", image: "https://via.placeholder.com/150?text=Potato" },
    { id: 5, name: "Milk", price: 50, unit: "500ml", description: "Fresh, pasteurized milk from local dairies.", image: "https://via.placeholder.com/150?text=Milk" },
    { id: 6, name: "Cheese", price: 120, unit: "200g", description: "Creamy cheddar cheese for your sandwiches.", image: "https://via.placeholder.com/150?text=Cheese" },
    { id: 7, name: "Cola", price: 40, unit: "500ml", description: "Refreshing cola drink to quench your thirst.", image: "coke.jpeg" },
    { id: 8, name: "Orange Juice", price: 80, unit: "1L", description: "100% pure orange juice, no added sugar.", image: "https://via.placeholder.com/150?text=Juice" },
    { id: 9, name: "Chips", price: 20, unit: "pack", description: "Crispy potato chips, lightly salted.", image: "https://via.placeholder.com/150?text=Chips" },
    { id: 10, name: "Chocolate", price: 50, unit: "100g", description: "Rich, dark chocolate bar.", image: "https://via.placeholder.com/150?text=Chocolate" },
    { id: 11, name: "Bread", price: 40, unit: "loaf", description: "Freshly baked white bread.", image: "https://via.placeholder.com/150?text=Bread" },
    { id: 12, name: "Cookies", price: 60, unit: "pack", description: "Crunchy chocolate chip cookies.", image: "https://via.placeholder.com/150?text=Cookies" },
    { id: 13, name: "Soap", price: 30, unit: "unit", description: "Gentle soap for daily use.", image: "https://via.placeholder.com/150?text=Soap" },
    { id: 14, name: "Shampoo", price: 150, unit: "200ml", description: "Nourishing shampoo for healthy hair.", image: "https://via.placeholder.com/150?text=Shampoo" },
    { id: 15, name: "Detergent", price: 100, unit: "kg", description: "Powerful detergent for clean clothes.", image: "https://via.placeholder.com/150?text=Detergent" },
    { id: 16, name: "Tissue Paper", price: 50, unit: "pack", description: "Soft tissue paper pack.", image: "https://via.placeholder.com/150?text=Tissue" },
    { id: 17, name: "Cereal", price: 200, unit: "500g", description: "Healthy breakfast cereal with oats.", image: "https://via.placeholder.com/150?text=Cereal" },
    { id: 18, name: "Oats", price: 150, unit: "400g", description: "Whole grain oats for a hearty meal.", image: "https://via.placeholder.com/150?text=Oats" },
    { id: 19, name: "Ice Cream", price: 100, unit: "500ml", description: "Creamy vanilla ice cream.", image: "https://via.placeholder.com/150?text=IceCream" },
    { id: 20, name: "Chicken Nuggets", price: 200, unit: "250g", description: "Crispy frozen chicken nuggets.", image: "https://via.placeholder.com/150?text=Nuggets" },
    { id: 21, name: "Mango (Sale)", price: 90, unit: "kg", description: "Sweet mangoes on discount!", image: "https://via.placeholder.com/150?text=Mango" },
    { id: 22, name: "Coke (Sale)", price: 35, unit: "500ml", description: "Chilled cola at a special price.", image: "https://via.placeholder.com/150?text=Coke" },
    { id: 23, name: "Chips (Sale)", price: 20, unit: "pack", description: "Extra crispy chips on sale.", image: "https://via.placeholder.com/150?text=Chips" },
    { id: 24, name: "Soap (Sale)", price: 25, unit: "unit", description: "Soap at a reduced price!", image: "https://via.placeholder.com/150?text=Soap" },
    { id: 25, name: "Mango", price: 120, unit: "kg", description: "Juicy, ripe mangoes.", image: "https://via.placeholder.com/150?text=Mango" },
    { id: 26, name: "Orange", price: 80, unit: "kg", description: "Fresh oranges, rich in vitamin C.", image: "https://via.placeholder.com/150?text=Orange" },
    { id: 27, name: "Onion", price: 35, unit: "kg", description: "Essential onions for every kitchen.", image: "https://via.placeholder.com/150?text=Onion" },
    { id: 28, name: "Carrot", price: 50, unit: "kg", description: "Crunchy carrots, great for salads.", image: "https://via.placeholder.com/150?text=Carrot" },
    { id: 29, name: "Yogurt", price: 40, unit: "200g", description: "Probiotic-rich yogurt.", image: "https://via.placeholder.com/150?text=Yogurt" },
    { id: 30, name: "Butter", price: 60, unit: "100g", description: "Smooth, creamy butter.", image: "https://via.placeholder.com/150?text=Butter" },
    { id: 31, name: "Bottled Water", price: 20, unit: "1L", description: "Pure drinking water.", image: "https://via.placeholder.com/150?text=Water" },
    { id: 32, name: "Green Tea", price: 100, unit: "100g", description: "Refreshing green tea leaves.", image: "https://via.placeholder.com/150?text=Tea" },
    { id: 33, name: "Mixed Nuts", price: 150, unit: "200g", description: "Healthy mix of almonds, cashews.", image: "https://via.placeholder.com/150?text=Nuts" },
    { id: 34, name: "Biscuits", price: 30, unit: "pack", description: "Sweet biscuits for tea time.", image: "https://via.placeholder.com/150?text=Biscuits" },
    { id: 35, name: "Cake Slice", price: 50, unit: "piece", description: "Moist chocolate cake slice.", image: "https://via.placeholder.com/150?text=Cake" },
    { id: 36, name: "Muffin", price: 40, unit: "unit", description: "Fluffy blueberry muffin.", image: "https://via.placeholder.com/150?text=Muffin" },
    { id: 37, name: "Toothpaste", price: 80, unit: "100g", description: "Minty toothpaste for fresh breath.", image: "https://via.placeholder.com/150?text=Toothpaste" },
    { id: 38, name: "Deodorant", price: 120, unit: "150ml", description: "Long-lasting deodorant spray.", image: "https://via.placeholder.com/150?text=Deo" },
    { id: 39, name: "Floor Cleaner", price: 90, unit: "500ml", description: "Effective floor cleaning solution.", image: "https://via.placeholder.com/150?text=Cleaner" },
    { id: 40, name: "Trash Bags", price: 60, unit: "10pcs", description: "Durable trash bags.", image: "https://via.placeholder.com/150?text=TrashBag" },
    { id: 41, name: "Jam", price: 80, unit: "200g", description: "Sweet strawberry jam.", image: "https://via.placeholder.com/150?text=Jam" },
    { id: 42, name: "Honey", price: 150, unit: "250g", description: "Pure, natural honey.", image: "https://via.placeholder.com/150?text=Honey" },
    { id: 43, name: "Frozen Pizza", price: 250, unit: "unit", description: "Ready-to-bake pizza.", image: "https://via.placeholder.com/150?text=Pizza" },
    { id: 44, name: "Frozen Peas", price: 80, unit: "200g", description: "Fresh frozen green peas.", image: "https://via.placeholder.com/150?text=Peas" }
  ];
  return products.find(product => product.id === productId);
}

function updateCart() {
  cartCount.innerText = cart.length;
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price * item.quantity}
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsList.appendChild(li);
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.innerText = total;
}

function addToCart(productId) {
  const product = getProductById(productId);
  const cartProduct = { ...product, quantity: 1 };
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex > -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push(cartProduct);
  }
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function showProductDetail(productId) {
  const product = getProductById(productId);
  detailImage.src = product.image;
  detailName.innerText = product.name;
  detailPrice.innerText = `₹${product.price}/${product.unit}`;
  detailDelivery.innerText = "Delivery in 10 min";
  detailDescription.innerText = product.description;
  detailAddToCart.setAttribute("data-id", productId);
  productDetail.style.display = "flex";
}

document.getElementById("cart-icon").addEventListener("click", () => {
  cartSidebar.classList.toggle("open");
});

document.querySelectorAll(".product-card, .special-card").forEach(card => {
  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = parseInt(card.dataset.id);
      addToCart(productId);
    } else {
      const productId = parseInt(card.dataset.id);
      showProductDetail(productId);
    }
  });
});

detailAddToCart.addEventListener("click", () => {
  const productId = parseInt(detailAddToCart.getAttribute("data-id"));
  addToCart(productId);
  productDetail.style.display = "none";
});

closeDetail.addEventListener("click", () => {
  productDetail.style.display = "none";
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length > 0) {
    alert(`Order placed! Total: ₹${cartTotal.innerText}. Delivery in 10 mins!`);
    cart = [];
    updateCart();
    cartSidebar.classList.remove("open");
  } else {
    alert("Your cart is empty!");
  }
});