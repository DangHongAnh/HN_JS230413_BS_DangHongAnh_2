import React from "react";
import "./Style.css";
function ListProducts({ addToCart, products }) {
  return (
    <div>
      <div className="list-products">
        <h1>LIST PRODUCTS</h1>
        <div className="CardBig row">
          {products.map((product, i) => (
            <div className="cardSmall col-3" key={i}>
              <div>
                <img
                  src={product.image_url}
                  alt={product.name}
                  width={"100%"}
                />
              </div>
              <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h3 style={{ fontWeight: "700" }}>{product.price}$</h3>
                <div className="btn">
                  <input type="number" className="quantity" />
                  <button
                    className="btn-add"
                    onClick={() => {
                      const quantity = parseInt(
                        document.getElementsByClassName("quantity")[i].value
                      );
                      addToCart(product, quantity);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
