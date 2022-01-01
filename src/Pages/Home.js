import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import TotalCustomers from "../components/TotalCustomers";
import TotalProducts from "../components/TotalProducts";
import Image from "react-bootstrap/Image";
import Hero from "../img/hero.jpg";
const Home = () => {
  return (
    <>
      <section className="landing" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <TotalProducts />
      <ProductList />
      <TotalCustomers />
      <Categories /> */}
    </>
  );
};

export default Home;
