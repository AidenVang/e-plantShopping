/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

/* App Background */
body {
  background-image: url('/assets/images/nursery-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

/* Landing Page */
.app-container {
  text-align: center;
  padding-top: 120px;
  color: #2e4a2f;
}

.get-started-btn {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
}

.get-started-btn:hover {
  background-color: #3e8e41;
}

/* About Us Page */
.about-container {
  max-width: 700px;
  margin: 80px auto;
  background: rgba(255, 255, 255, 0.85);
  padding: 30px;
  border-radius: 10px;
  color: #2e4a2f;
  line-height: 1.6;
}

/* Product List */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  padding: 40px;
}

.product-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.add-btn {
  margin-top: 10px;
  padding: 10px 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #3e8e41;
}

/* Cart Page */
.cart-container {
  max-width: 800px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 10px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
}

.cart-item img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.quantity-btn {
  padding: 6px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.quantity-btn:hover {
  background-color: #3e8e41;
}

.delete-btn {
  padding: 6px 12px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c9302c;
}

/* Checkout Buttons */
.checkout-btn,
.continue-btn {
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.checkout-btn {
  background-color: #4caf50;
  color: white;
}

.continue-btn {
  background-color: #2e4a2f;
  color: white;
}

.checkout-btn:hover {
  background-color: #3e8e41;
}

.continue-btn:hover {
  background-color: #1f341f;
}
