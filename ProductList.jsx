import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  // Multiple categories with 6 plants each
  const categories = {
    Indoor: [
      {
        id: 1,
        name: "Snake Plant",
        price: 15.99,
        image: "/assets/images/snake-plant.jpg",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 18.99,
        image: "/assets/images/peace-lily.jpg",
      },
      {
        id: 3,
        name: "ZZ Plant",
        price: 22.49,
        image: "/assets/images/zz-plant.jpg",
      },
      {
        id: 4,
        name: "Spider Plant",
        price: 12.99,
        image: "/assets/images/spider-plant.jpg",
      },
      {
        id: 5,
        name: "Pothos",
        price: 10.99,
        image: "/assets/images/pothos.jpg",
      },
      {
        id: 6,
        name: "Philodendron",
        price: 14.99,
        image: "/assets/images/philodendron.jpg",
      },
    ],

    Succulents: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 12.49,
        image: "/assets/images/aloe-vera.jpg",
      },
      {
        id: 8,
        name: "Echeveria",
        price: 9.99,
        image: "/assets/images/echeveria.jpg",
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 13.99,
        image: "/assets/images/jade-plant.jpg",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 8.99,
        image: "/assets/images/haworthia.jpg",
      },
      {
        id: 11,
        name: "Burro’s Tail",
        price: 11.99,
        image: "/assets/images/burros-tail.jpg",
      },
      {
        id: 12,
        name: "Cactus Mix",
        price: 16.99,
        image: "/assets/images/cactus-mix.jpg",
      },
    ],

    Outdoor: [
      {
        id: 13,
        name: "Rose Bush",
        price: 22.99,
        image: "/assets/images/rose-bush.jpg",
      },
      {
        id: 14,
        name: "Lavender",
        price: 18.49,
        image: "/assets/images/lavender.jpg",
      },
      {
        id: 15,
        name: "Hydrangea",
        price: 24.99,
        image: "/assets/images/hydrangea.jpg",
      },
      {
        id: 16,
        name: "Sunflower",
        price: 7.99,
        image: "/assets/images/sunflower.jpg",
      },
      {
        id: 17,
        name: "Gardenia",
        price: 19.99,
        image: "/assets/images/gardenia.jpg",
      },
      {
        id: 18,
        name: "Boxwood Shrub",
        price: 29.99,
        image: "/assets/images/boxwood.jpg",
      },
    ],
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      {Object.keys(categories).map((categoryName) => (
        <div key={categoryName}>
          <h2>{categoryName}</h2>

          <div className="product-grid">
            {categories[categoryName].map((plant) => (
              <div className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />

                <h3>{plant.name}</h3>
                <p><strong>${plant.price.toFixed(2)}</strong></p>

                <button
                  className="add-btn"
                  onClick={() => handleAdd(plant)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

