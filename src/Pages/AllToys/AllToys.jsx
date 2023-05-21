/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../CustomHook/CustomHook";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchName, setSearchName] = useState(" ");
  useTitle("All Toys")
  useEffect(() => {
    fetch("https://toy-generator-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const handleSearch = () => {
    fetch(`https://toy-generator-server.vercel.app/toySearchByToyName/${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div>
      <div className="w-full  text-center mb-5">
        <input
          onChange={(event) => setSearchName(event.target.value)}
          type="text"
          placeholder="Search by name"
          className="input input-bordered mr-4 input-info w-full mx-auto max-w-xs"
        />
        <button onClick = {handleSearch} className="btn btn-outline btn-info">
          Search
        </button>
      </div>
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
            {toys?.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.ToyName}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/SingleToys/${toy._id}`}>
                    <button className="btn d-btn">Details</button>
                  </Link>
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
