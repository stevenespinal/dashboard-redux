import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardList from "../components/DashboardList";
import { createDashboards } from "../redux/actions/dashboards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateDashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const [dashboardName, setDashboardName] = useState("");
  const [listOfProducts, setListOfProducts] = useState(false);
  const [totalProducts, setTotalProducts] = useState(false);
  const [latestProducts, setLatestProducts] = useState(false);
  const [totalCustomers, setTotalCustomers] = useState(false);
  const [categories, setCategories] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const newDashboardData = {
      name: dashboardName,
      listOfProducts,
      totalCustomers,
      totalProducts,
      latestProducts,
      categories,
    };
    setDashboard(newDashboardData);
  }, [
    dashboardName,
    listOfProducts,
    totalCustomers,
    totalProducts,
    latestProducts,
    categories,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!dashboardName) {
      toast.error("You must enter a name");
    } else {
      dispatch(createDashboards(dashboard));
    }
  };

  return (
    <form onSubmit={submitHandler} className="container">
      <ToastContainer />
      <h2 className="mt-5">Which components would you like to include?</h2>
      <div className="mt-5 mb-3">
        <div className="input-wrapper">
          <input
            id="dashboardName"
            type="text"
            onChange={(e) => setDashboardName(e.target.value)}
            value={dashboardName}
            placeholder="Enter Desired Dashboard Name"
          />
        </div>
      </div>
      <div className="inputGroup">
        <input
          id="totalCustomers"
          type="checkbox"
          onChange={(e) => setTotalCustomers(!totalCustomers)}
        />
        <label htmlFor="totalCustomers">Total Customers</label>
      </div>

      <div className="inputGroup">
        <input
          id="totalProducts"
          type="checkbox"
          onChange={(e) => setTotalProducts(!totalProducts)}
        />
        <label htmlFor="totalProducts">Total Products</label>
      </div>
      <div className="inputGroup">
        <input
          id="latestProduct"
          type="checkbox"
          onChange={(e) => setLatestProducts(!latestProducts)}
        />
        <label htmlFor="latestProduct">Latest Product</label>
      </div>
      <div className="inputGroup">
        <input
          id="categories"
          type="checkbox"
          onChange={(e) => setCategories(!categories)}
        />
        <label htmlFor="categories">Categories</label>
      </div>
      <div className="inputGroup">
        <input
          id="listsOfProducts"
          type="checkbox"
          onChange={(e) => setListOfProducts(!listOfProducts)}
        />
        <label htmlFor="listsOfProducts">Lists Of Products</label>
      </div>

      <button type="submit" className="btn btn-dark mt-3">
        Create Dashboard
      </button>

      <DashboardList />
    </form>
  );
};

export default CreateDashboard;
