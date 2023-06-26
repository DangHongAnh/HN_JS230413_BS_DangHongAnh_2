import React from "react";
import "./Style.css";
function CartProduct({ updateQuantity, clearCart, calculateTotalPrice, cartItems }) {
  return (
    <div>
      <div className="cart">
        <h1>CART</h1>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image_url} alt={item.name} width={"50px"} />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>{item.totalPrice}$</td>
                <td>
                  <button className="btn-del" onClick={() => clearCart(item)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Sum: {calculateTotalPrice()}$</h2>
      </div>
    </div>
  );
}

export default CartProduct;
