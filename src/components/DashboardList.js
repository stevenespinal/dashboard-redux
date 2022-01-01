import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Categories from "./Categories";
import ProductList from "./ProductList";
import TotalCustomers from "./TotalCustomers";
import TotalProducts from "./TotalProducts";
import LatestProduct from "./LatestProduct";
import { Card } from "react-bootstrap";
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
      className="mt-5 mb-5"
      style={{ display: "grid", gridTemplateColumns: "1fr" }}
    >
      {dashboards.map((dash, index) => {
        return (
          <Card className="mt-5 mb-5 rounded">
            <Card.Header>
              <h1>Dashboard Name: {dash.name}</h1>
            </Card.Header>
            <Card.Body
              style={{ display: "flex", flexDirection: "column" }}
              key={index}
            >
              <div>{dash.categories && <Categories />}</div>
              <div>{dash.listOfProducts && <ProductList />}</div>
              <div>{dash.totalCustomers && <TotalCustomers />}</div>
              <div>{dash.totalProducts && <TotalProducts />}</div>
              <div>{dash.latestProducts && <LatestProduct />}</div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardList;
