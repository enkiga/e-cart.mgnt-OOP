# Shopping Cart Application

This is a simple shopping cart application built using JavaScript (ES6). The application allows users to add products to a cart, adjust quantities, and remove items. The cart dynamically updates the total price and quantity of items.

---

## Table of Contents

1. [Features](#features)
2. [Code Structure](#code-structure)
3. [How It Works](#how-it-works)
4. [Usage](#usage)
5. [Dependencies](#dependencies)
6. [License](#license)

---

## Features

- **Product Management**:

  - Each product has a unique ID, name, and price.
  - Products are dynamically generated from the HTML structure.

- **Cart Functionality**:

  - Add products to the cart.
  - Adjust product quantities using plus and minus buttons.
  - Remove products from the cart.
  - Dynamically calculate and display the total price of items in the cart.

- **User Interaction**:
  - Plus button increases the quantity and updates the cart total.
  - Minus button decreases the quantity (if greater than 1) but does not update the cart total.
  - Delete button removes the product from the cart and updates the total.

---

## Code Structure

The application is structured into three main classes and several helper functions:

### 1. **Product Class**

- Represents a product with properties:
- `id`: Unique identifier for the product.
- `name`: Name of the product.
- `price`: Price of the product.

### 2. **CartItem Class**

- Extends the `Product` class to include:
- `quantity`: Quantity of the product in the cart.

### 3. **Cart Class**

- Manages the shopping cart with methods:
- `addItem(item)`: Adds a product to the cart.
- `removeItem(item)`: Removes a product from the cart.
- `getTotal()`: Calculates the total price of items in the cart.
- `getCount()`: Calculates the total number of items in the cart.
- `getItems()`: Returns the list of items in the cart.

### 4. **Helper Functions**

- `generateProductID()`: Generates a unique ID for each product.
- `updateCartTotal()`: Updates the total price displayed in the cart.
- `updateProductQuantity(element)`: Updates the quantity of a product in the cart.

### 5. **Event Listeners**

- Attached to plus, minus, and delete icons to handle user interactions.

---

## How It Works

1. **Initialization**:

   - The script reads product information from the HTML structure and creates instances of the `Product` class.
   - A `Cart` instance is created to manage the shopping cart.

2. **Adding Products**:

   - When the plus button is clicked:
     - The product quantity is incremented.
     - The product is added to the cart (if not already present).
     - The cart total is updated.

3. **Adjusting Quantities**:

   - When the minus button is clicked:
     - The product quantity is decremented (if greater than 1).
     - The cart total is not updated unless the plus button is clicked.

4. **Removing Products**:

   - When the delete button is clicked:
     - The product is removed from the cart.
     - The cart total is updated.

5. **Dynamic Updates**:
   - The cart total and product quantities are dynamically updated in the UI.

---

## Usage

To use this application:

1. Include the JavaScript file in your HTML.
2. Ensure the HTML structure has the following elements:
   - Products with class `card-body`.
   - Plus, minus, and delete icons with classes `fa-plus-circle`, `fa-minus-circle`, and `fa-trash-alt`, respectively.
   - A total price element with class `total`.

Example HTML structure:

```html
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Product 1</h3>
    <p class="unit-price">$10.00</p>
    <i class="fas fa-minus-circle"></i>
    <span class="quantity">1</span>
    <i class="fas fa-plus-circle"></i>
    <i class="fas fa-trash-alt"></i>
  </div>
</div>
<p class="total">$0.00</p>
```

### Dependencies

- **Font Awesome** - Used for plus, minus, and delete icons.
- **Modern Browser** - Supports ES6 features (e.g., arrow functions, const, let, Array.from).

### License

This project is open-source and available under the MIT License.
