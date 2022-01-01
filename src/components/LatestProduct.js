import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalProducts, getRandomProduct } from "../redux/actions/products";
import { Spinner } from "react-bootstrap";
const LatestProduct = () => {
  const dispatch = useDispatch();

  const { product, loading } = useSelector(
    ({ randomProduct }) => randomProduct
  );

  useEffect(() => {
    dispatch(getTotalProducts());
    dispatch(getRandomProduct());
  }, [dispatch]);

  console.log(product);
  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div className="latest-product-container mb-3 mt-3">
      <img src={product && product.image} alt={product && product.title} />
      <div>
        <p>Product Name: {product && product.title}</p>
        <p>Inventory Count: {product && product.rating?.count}</p>
        <p>Ratings: {product && product.rating?.rate}</p>
        <p>Category: {product && product.category}</p>
        <p>Description: {product && product.description}</p>
      </div>
    </div>
  );
};

export default LatestProduct;
