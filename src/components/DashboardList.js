import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Categories from "./Categories";
import ProductList from "./ProductList";
import TotalCustomers from "./TotalCustomers";
import TotalProducts from "./TotalProducts";
import LatestProduct from "./LatestProduct";

const DashboardList = () => {
  const { dashboards, loading } = useSelector(
    ({ createDashboard }) => createDashboard
  );

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div
      className="mt-5"
      style={{ display: "grid", gridTemplateColumns: "1fr" }}
    >
      {dashboards.map((dash, index) => {
        console.log("dash", dash);
        return (
          <div style={{ display: "flex", flexDirection: "column" }} key={index}>
            <h1>{dash.name}</h1>
            <h6>{dash.categories && <Categories />}</h6>
            <h6>{dash.listOfProducts && <ProductList />}</h6>
            <h6>{dash.totalCustomers && <TotalCustomers />}</h6>
            <h6>{dash.totalProducts && <TotalProducts />}</h6>
            <h6>{dash.totalProducts && <LatestProduct />}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardList;
