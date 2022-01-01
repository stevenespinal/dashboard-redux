import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Card } from "react-bootstrap";
import { getTotalProducts } from "../redux/actions/products";

const TotalProducts = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    ({ totalProducts }) => totalProducts
  );
  useEffect(() => {
    dispatch(getTotalProducts());
  }, [dispatch]);

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Card>
      <Card.Body>Total Amount of Products: {products.length}</Card.Body>
    </Card>
  );
};

export default TotalProducts;
