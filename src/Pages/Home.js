import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotalProducts } from "../redux/actions/products";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalProducts());
  }, []);
  return (
    <>
      <button>
        <Link to="/create">Create Dashboard</Link>
      </button>
    </>
  );
};

export default Home;
