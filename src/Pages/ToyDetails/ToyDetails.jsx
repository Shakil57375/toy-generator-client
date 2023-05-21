import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import "../../../src/index.css";
import { useTitle } from "../../CustomHook/CustomHook";
import { useEffect } from "react";
const ToyDetails = () => {
  useTitle("Toy details")
  useEffect(() => {
    AOS.init({
      duration:1200,
    });
  }, []);
  const ToyInfos = useLoaderData();
  const {
    image,
    ToyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = ToyInfos;
  return (
    <div data-aos='zoom-in' className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div className="w-full">
          <img src={image} alt="Toy" className="h-[500px] w-full" />
        </div>
        <div className="w-full p-4">
          <h2 className="text-5xl font-light font-Marcellus mb-2 divide-y-2">{ToyName}</h2>
          <p className="text-xl font-bold my-4">Price: $ {price}</p>
          <div className="flex items-center my-4 gap-5">
            <Rating style={{ maxWidth: 140 }} value= {Math.round(rating)} readOnly />
            <span className="text-xl font-bold"> {Math.round(rating)} <span className="text-blue-500 text-lg font-semibold">Reviews</span></span>
          </div>
          <p className="my-2"><span className="text-xl font-semibold">Available Quantity</span> : <span className="text-xl font-bold">{quantity}</span></p>
          <p className="text-xl font-semibold my-2">Seller Name : {sellerName}</p>
          <p className="text-xl font-semibold my-2">Email : {sellerEmail}</p>
          <div className=" my-2">
            <p className="text-lg font-semibold">description : </p>
            <p className="text-base text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
