import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import TotalCustomers from "../components/TotalCustomers";
import TotalProducts from "../components/TotalProducts";
const Home = () => {
  return (
    <>
      <button>
        <Link to="/create">Create Dashboard</Link>
      </button>
      <TotalProducts />
      <ProductList />
      <TotalCustomers />
      <Categories />
    </>
  );
};

export default Home;
