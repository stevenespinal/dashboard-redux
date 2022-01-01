import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/actions/categories";
import { Spinner } from "react-bootstrap";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(
    ({ allCategories }) => allCategories
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <ul>
      {categories.map((cat, index) => (
        <li key={index}>{cat}</li>
      ))}
    </ul>
  );
};

export default Categories;
