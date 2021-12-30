import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDashboards } from "../redux/actions/dashboards";
// use bootstrap ui after logic finished
const CreateDashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const [dashboardName, setDashboardName] = useState("");
  const [listOfProducts, setListOfProducts] = useState(false);
  const [totalProducts, setTotalProducts] = useState(false);
  const [latestProducts, setLatestProducts] = useState(false);
  const [totalCustomers, setTotalCustomers] = useState(false);
  const [categories, setCategories] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newDashboardData = {
      name: dashboardName,
      listOfProducts,
      totalCustomers,
      totalProducts,
      latestProducts,
      categories,
    };
    setDashboard(newDashboardData);
    dispatch(createDashboards(dashboard));
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="dashboardName">Dashboard Name</label>
      <input
        id="dashboardName"
        type="text"
        onChange={(e) => setDashboardName(e.target.value)}
        value={dashboardName}
      />
      <label htmlFor="totalCustomers">Include Total Customers?</label>
      <input
        id="totalCustomers"
        type="checkbox"
        onChange={(e) => setTotalCustomers(!totalCustomers)}
      />
      <label htmlFor="totalProducts">Include Total Products?</label>
      <input
        id="totalProducts"
        type="checkbox"
        onChange={(e) => setTotalProducts(!totalProducts)}
      />
      <label htmlFor="latestProduct">Include Latest Product?</label>
      <input
        id="latestProduct"
        type="checkbox"
        onChange={(e) => setLatestProducts(!latestProducts)}
      />
      <label htmlFor="categories">Include Categories?</label>
      <input
        id="categories"
        type="checkbox"
        onChange={(e) => setCategories(!categories)}
      />
      <label htmlFor="listsOfProducts">Include Lists Of Products?</label>
      <input
        id="listsOfProducts"
        type="checkbox"
        onChange={(e) => setListOfProducts(!listOfProducts)}
      />
      <button type="submit">Create Dashboard</button>
    </form>
  );
};

export default CreateDashboard;
