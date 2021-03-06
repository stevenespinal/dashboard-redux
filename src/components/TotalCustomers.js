import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTotalCustomers } from "../redux/actions/customers";
import { Spinner, Table } from "react-bootstrap";

const TotalCustomers = () => {
  const dispatch = useDispatch();
  const { customers, loading } = useSelector(
    ({ totalCustomers }) => totalCustomers
  );

  useEffect(() => {
    dispatch(getTotalCustomers());
  }, [dispatch]);
  return (
    <>
      <span>Total Amount of Customers: {customers?.length}</span>

      <Table striped bordered hover size="sm" className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  {customer.name.firstname} {customer.name.lastname}
                </td>
                <td>{customer.email}</td>
                <td>{customer.username}</td>
                <td>{customer.password}</td>
                <td>{customer.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TotalCustomers;
