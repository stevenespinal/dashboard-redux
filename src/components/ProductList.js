import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Table } from "react-bootstrap";
import { getTotalProducts } from "../redux/actions/products";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    ({ totalProducts }) => totalProducts
  );
  useEffect(() => {
    dispatch(getTotalProducts());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    height="50"
                    width="50"
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
