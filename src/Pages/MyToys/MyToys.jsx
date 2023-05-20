/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[user?.email])
    const handleDeleteToy = (id) =>{
        console.log(id)
    }
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
              <tr>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.ToyName}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td className="flex lg:flex-row flex-col gap-4">
                    <button className="btn d-btn">Update</button>
                    <button onClick={()=> handleDeleteToy(toy._id)} className="btn d-btn">Delete</button>
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