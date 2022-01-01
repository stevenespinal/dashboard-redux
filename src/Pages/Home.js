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
            <h1 className="x-large">DASHBOARD </h1>
            <p className="lead">
              Create multiple new dashboards using your own configuration, you
              are able to view your created dashboards within the same page!
            </p>
            <div className="buttons">
              <Link to="/create" className="btn btn-success">
                Create Dashboard
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
