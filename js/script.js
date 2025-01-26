// Product class to store the properties for id, name, and price of the product.
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// CartItem class extends Product to store the properties for product and its quantity.
class CartItem extends Product {
  constructor(id, name, price, quantity) {
    super(id, name, price);
    this.quantity = quantity;
  }
}

// Cart class to store the properties for items in the cart.
class Cart {
  constructor() {
    this.items = [];
  }

  // Method to add an item to the cart.
  addItem(item) {
    this.items.push(item);
  }

  // Method to remove an item from the cart.
  removeItem(item) {
    this.items = this.items.filter((cartItem) => cartItem.id !== item.id);
  }

  // Method to get the total price of the items in the cart.
  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Method to get the total number of items in the cart.
  getCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to get the items in the cart.
  getItems() {
    return this.items;
  }
}

// Function to generate a product ID for each product.
const generateProductID = () => {
  return (
    "product" +
    Math.floor(Math.random() * 1000) +
    Math.random().toString(36).substring(2, 6)
  );
};

// Get all the products from the HTML file.
const products = document.getElementsByClassName("card-body");

// Create an instance of Product class for each product.
const productInstances = Array.from(products).map(
  (product) =>
    new Product(
      generateProductID(),
      product.getElementsByClassName("card-title")[0].innerHTML,
      parseFloat(
        product
          .getElementsByClassName("unit-price")[0]
          .innerHTML.replace("$", "")
      )
    )
);

// Get the initial cart total.
let cartTotal = parseFloat(
  document.getElementsByClassName("total")[0].innerHTML.replace("$", "")
);

// Function to update the cart total.
const updateCartTotal = () => {
  cartTotal = cart.getTotal();
  document.getElementsByClassName("total")[0].innerHTML = `$${cartTotal}`;
};

// Create an instance of Cart class.
const cart = new Cart();

// Function to update the product quantity in the cart.
const updateProductQuantity = (element) => {
  const productName =
    element.parentElement.parentElement.getElementsByClassName("card-title")[0]
      .innerHTML;

  // Find the product instance.
  const productInstance = productInstances.find(
    (product) => product.name === productName
  );

  // Check if the product is already in the cart, else create a new cart item.
  let cartItem = cart.getItems().find((item) => item.id === productInstance.id);

  if (cartItem) {
    const quantityElement =
      element.nextElementSibling || element.previousElementSibling;
    const quantity = parseInt(quantityElement.innerHTML);
    cartItem.quantity = quantity;
  } else {
    cart.addItem(
      new CartItem(
        productInstance.id,
        productInstance.name,
        productInstance.price,
        1
      )
    );
    updateCartTotal();
  }
};

// Add event listeners to the plus icons.
const plusIcons = document.getElementsByClassName("fa-plus-circle");
Array.from(plusIcons).forEach((plusIcon) => {
  plusIcon.addEventListener("click", function () {
    const quantityElement = this.nextElementSibling;
    const quantity = parseInt(quantityElement.innerHTML) + 1;
    quantityElement.innerHTML = quantity;
    updateProductQuantity(this);
    updateCartTotal();
  });
});

// Add event listeners to the minus icons.
const minusIcons = document.getElementsByClassName("fa-minus-circle");
Array.from(minusIcons).forEach((minusIcon) => {
  minusIcon.addEventListener("click", function () {
    const quantityElement = this.previousElementSibling;
    const quantity = parseInt(quantityElement.innerHTML);
    if (quantity > 1) {
      quantityElement.innerHTML = quantity - 1;
      updateProductQuantity(this);
      updateCartTotal();
    } else {
      alert(
        "Quantity cannot be less than 1 unit : \nYou can remove the product from the cart by clicking the remove button"
      );
    }
  });
});

// Add event listeners to the delete icons.
const deleteIcons = document.getElementsByClassName("fa-trash-alt");
Array.from(deleteIcons).forEach((deleteIcon) => {
  deleteIcon.addEventListener("click", function () {
    const cardElement = this.closest(".card");
    const productName = cardElement.querySelector(".card-title").innerHTML;

    // Find the product instance.
    const productInstance = productInstances.find(
      (product) => product.name === productName
    );

    // Set the quantity to 0.
    const quantityElement = cardElement.querySelector(".quantity");
    quantityElement.innerHTML = 0;

    // Remove the product from the cart.
    cart.removeItem(productInstance);

    // Update the cart total.
    updateCartTotal();
  });
});
