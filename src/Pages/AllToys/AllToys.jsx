/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div>
            <p>All Toys coming {toys.length}</p>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
  <thead>
            <tr>
              <th>ID</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((tas, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{tas.sellerName}</td>
                <td>{tas.ToyName}</td>
                <td>{tas.category}</td>
                <td>{tas.price}</td>
                <td>{tas.quantity}</td>
                <td>
                  <button className="btn d-btn">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToys;