/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const [activeToy, setActiveToy] = useState("cricket");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    fetch(`https://toy-generator-server.vercel.app/toys/${activeToy}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeToy]);
  const handleTabClick = (tabName) => {
    setActiveToy(tabName);
  };
  return (
    <div data-aos='zoom-in' className="mb-10">
      <h3 className="text-5xl font-bold text-center font-Marcellus my-10">
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
              <h2 className="card-title text-2xl font-bold text-center my-4">
                {toy.ToyName}
              </h2>
              <div className="flex justify-between items-center mb-10">
                <p className="text-lg font-semibold">Price :$ {toy.price}</p>
                <Rating style={{ maxWidth: 140 }} value= {Math.round(toy.rating)} readOnly />
              </div>
              <div className=" absolute bottom-5 left-40">
                <Link to={`/SingleToys/${toy._id}`}>
                  <button className="btn d-btn btn-primary ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
