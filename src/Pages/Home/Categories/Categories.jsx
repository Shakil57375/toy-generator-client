/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
const Categories = () => {
  const [activeToy, setActiveToy] = useState("cricket");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${activeToy}`)
      .then((res) => res.json())
      .then((data) =>  setToys(data));
  }, [activeToy]);
  console.log(toys)
  const handleTabClick = (tabName) => {
    setActiveToy(tabName);
  };
  return (
    <div>
      <h3 className="text-5xl font-bold text-center my-10">
        Search By Categories
      </h3>
      <div className="flex justify-start items-center mb-10">
        <div
          onClick={() => handleTabClick("cricket")}
          className={` mx-3  px-6 py-4  cursor-pointer cricket ${
            activeToy == "cricket"
              ? " bg-cyan-600 rounded-lg px-6 py-4  text-white"
              : ""
          }`}
        >
          Cricket Toy
        </div>
        <div
          onClick={() => handleTabClick("football")}
          className={`mx-3  px-6 py-4 cursor-pointer football ${
            activeToy == "football" ? " bg-cyan-600 rounded-lg text-white" : ""
          }`}
        >
          Football Toy
        </div>
        <div
          onClick={() => handleTabClick("badminton")}
          className={` mx-3  px-6 py-4 cursor-pointer  badminton ${
            activeToy == "badminton" ? " bg-cyan-600 rounded-lg text-white" : ""
          }`}
        >
          Badminton Toy
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {toys.map((toy) => (
          <div className="card relative w-full h-auto bg-base-100 shadow-xl">
            <figure>
              <img src={toy.image} className="w-56 h-60" alt="Shoes" />
            </figure>
            <div className="px-10 py-12">
              <h2 className="card-title text-2xl font-bold text-center my-4">Toy Name: {toy.ToyName}</h2>
              <div className="flex justify-between items-center mb-10">
                <p className="text-lg font-semibold">Price : {toy.price}</p>
                <p className="text-lg font-semibold">Rating : {toy.rating}</p>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary absolute bottom-5">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
