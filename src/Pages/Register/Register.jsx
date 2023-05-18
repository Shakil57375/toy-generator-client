import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const Register = () => {
    const {handleRegister} = useContext(AuthContext)
    // console.log(handleRegister);
    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password);
        handleRegister(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            alert("registered successfully")
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
  return (
    <div className="hero min-h-min bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="text-center lg:text-left">
          <img src="https://i.ibb.co/kX1Trqj/user-registration-removebg-preview.png" alt="Register Image" className="lg:w-[600px] lg:h-[500px] w-full" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="URL"
                placeholder="photo URL"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Have an account?  <Link to="/login" className="text-info">Login</Link>
                </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
