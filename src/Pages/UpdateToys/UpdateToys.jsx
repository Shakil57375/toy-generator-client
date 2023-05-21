/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const UpdateToys = () => {
  const id = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://toy-generator-server.vercel.app/updateToys/${data.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <label className="text-xl  font-semibold">
              Available quantity :
            </label>
            <input
              placeholder="Type here"
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("quantity")}
            />
          </div>
          
        </div>
        <div className="w-full">
          <label className="text-xl  font-semibold">Detail description :</label>
          <textarea
            placeholder="Type here"
            className="input mt-2 mr-6 input-bordered input-accent w-full"
            {...register("description")}
          />
        </div>
        <div className="lg:w-1/2 w-full hidden">
            <input
              placeholder="Type here"
              value={id.id}
              className="input mt-2 mr-6 input-bordered input-accent w-full"
              {...register("id")}
            />
        </div>
        <div className="w-full text-center my-5">
          <input
            className="btn btn-primary "
            value="update toy"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToys;
