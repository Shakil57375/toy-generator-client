/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user?.email]);
  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/singleToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto lg:w-full">
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
                <td className="flex lg:flex-row flex-col gap-4">
                  <button className="btn d-btn">
                    <Link to={`/toys/${toy._id}`}>Update</Link>
                  </button> 
                  <button
                    onClick={() => handleDeleteToy(toy._id)}
                    className="btn d-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
