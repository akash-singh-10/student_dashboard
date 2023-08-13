import React from "react";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">

        <div className="add_btn mt-2">
          <button className="btn btn-primary">Add Data</button>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Year-Branch</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">20305</th>
              <td>Akash Singh</td>
              <td>BE-IT</td>
              <td>1234567890</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                <button className="btn btn-warning"><i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
            
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Home;
