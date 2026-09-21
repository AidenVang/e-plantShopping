import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  // Sample product data — you can replace or expand this
  const products = [
    {
      id: 1,
      name: "Snake Plant",
      description: "Low‑maintenance indoor plant that purifies air.",
      price: 15.99,
      category: "Indoor",
      image: "/assets/images/snake-plant.jpg",
    },
    {
      id: 2,
      name: "Aloe Vera",
      description: "Healing succulent perfect for sunny windows.",
      price: 12.49,
      category: "Succulent",
      image: "/assets/images/aloe-vera.jpg",
    },
    {
      id: 3,
      name: "Peace Lily",
      description: "Elegant flowering plant that thrives in shade.",
      price: 18.99,
      category: "Indoor",
      image: "/assets/images/peace-lily.jpg",
    },
    {
      id: 4,
      name: "Rose Bush",
      description: "Outdoor flowering shrub with vibrant blooms.",
      price: 22.99,
      category: "Outdoor",
      image: "/assets/images/rose-bush.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />

          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>

          <button
            className="add-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
