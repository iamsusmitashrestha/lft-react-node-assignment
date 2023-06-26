import { useState } from "react";
import { addProduct } from "../../services/product";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [productName, setproductName] = useState("");
  const [available_qty, setAvailableQty] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      const productData = { productName, available_qty, price }; //
      await addProduct(productData);
      navigate("/getProduct", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>AddProduct</h4>
      <div className="container">
        <form action="">
          <input
            className="signup-input"
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Quantity"
            value={available_qty}
            onChange={(e) => setAvailableQty(e.target.value)}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>

        <button onClick={handleSubmit}>Add Product</button>
      </div>
    </div>
  );
}

export default AddProduct;
