/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
const AddToy = () => {
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch("http://localhost:5000/toys",{
      method : "POST",
      headers : {
      "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      alert("successfully added")
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
        <label className="text-xl  font-semibold">Toy image url :</label>
          <input
            placeholder="Toys Photo URL"
            className="input mr-6 mt-2 input-bordered input-accent w-full"
            {...register("image")}
          />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Toy Name :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("firstName")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Seller Name :</label>
            <input
              placeholder="Type here"
              defaultValue={user?.displayName}
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("sellerName")}
            />
          </div>
        </div>
        <div className="flex justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Seller Email :</label>
            <input
              placeholder="Type here"
              defaultValue={user?.email}
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("sellerEmail")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Category :</label>
            <select
              className="input mt-2 input-bordered input-accent w-full"
              {...register("category")}
            >
              <option value="football">Football Toys</option>
              <option value="cricket">Cricket Toys</option>
              <option value="badminton">Badminton Toys</option>
              <option value="hokey">Hokey Toys</option>
              <option value="other">Other Toys</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Price :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("price")}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Rating :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("rating")}
            />
          </div>
        </div>
        <div className="flex justify-between mt-3 gap-5 items-center">
          <div className="lg:w-1/2 w-full">
            <label className="text-xl  font-semibold">Available quantity :</label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("quantity")}
            />
          </div>
          <div className="w-full">
            <label className="text-xl  font-semibold">Detail description :</label>
            <textarea
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("description")}
            />
          </div>
        </div>
        <div className="w-full text-center mt-5">
          <input
            className="btn btn-primary "
            value="Add you toy"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
