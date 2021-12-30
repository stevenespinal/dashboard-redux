import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Categories from "./Categories";
import ProductList from "./ProductList";
import TotalCustomers from "./TotalCustomers";
import TotalProducts from "./TotalProducts";
const DashboardList = () => {
  const { dashboards, loading } = useSelector(
    ({ createDashboard }) => createDashboard
  );

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
      {dashboards.map((dash) => {
        console.log("dahs", dash);
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>{dash.name}</h1>
            <h6>{dash.categories && <Categories />}</h6>
            <h6>{dash.listOfProducts && <ProductList />}</h6>
            <h6>{dash.totalCustomers && <TotalCustomers />}</h6>
            <h6>{dash.totalCustomers && <TotalProducts />}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardList;
