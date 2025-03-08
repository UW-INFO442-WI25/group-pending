import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../style.css';
import groceryHero from '../assets/freshProduce.png';

const ShoppingListPage = () => {
  const [shoppingList, setShoppingList] = useState([]);

  // load product list
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    setShoppingList(savedList);
  }, []);

  // handle removing
  const handleRemoveFromShoppingList = (itemId) => {
    const updatedList = shoppingList.filter((item) => item.id !== itemId);
    setShoppingList(updatedList);
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  };

  return (
    <Layout>
      <div className="grocery-hero" style={{ backgroundImage: `url(${groceryHero})` }}>
        <h1 className="hero-title">Grab your favorites, start saving today</h1>
      </div>

      <div className="shopping-list-container">
        {shoppingList.length === 0 ? (
          <p className="empty-list">No items added yet.</p>
        ) : (
          <table className="coupon-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>AVAILABILITY</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {shoppingList.map((item) => {
                const hasDiscount = item.discount && item.discount.amount > 0;
                const oldPrice = hasDiscount ? item.price : null;
                const newPrice = hasDiscount
                  ? (item.price - item.discount.amount).toFixed(2)
                  : item.price.toFixed(2);

                const isAvailable = hasDiscount; 

                return (
                  <tr key={item.id}>
                    <td>
                      <div className="product-info">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="product-image"
                          />
                        )}
                        <span>{item.name}</span>
                      </div>
                    </td>

                    <td>
                      {hasDiscount && (
                        <span className="old-price">
                          ${oldPrice?.toFixed(2)}
                        </span>
                      )}
                      <span className="new-price">${newPrice}</span>
                    </td>

                    <td>
                      {isAvailable ? (
                        <span className="status available">available</span>
                      ) : (
                        <span className="status unavailable">unavailable</span>
                      )}
                    </td>

                    <td>
                      <button
                        className={`clip-coupon-btn ${
                          isAvailable ? '' : 'disabled'
                        }`}
                        disabled={!isAvailable}
                      >
                        Clip the coupon
                      </button>

                      <button
                        className="remove-btn"
                        onClick={() => handleRemoveFromShoppingList(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default ShoppingListPage;
