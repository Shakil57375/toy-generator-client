import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogin(email,password)
    .then(result =>{
        const user = result.user
        console.log(user)
        alert("user logged in successfully")
    })
    .catch(error =>{
        console.log(error.message);
    })
  };
  const handleGoogleLogin = () => {};
  return (
    <div className="hero min-h-min bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="text-center lg:text-left">
          <img
            src="https://i.ibb.co/9sp2CwF/istockphoto-1281150061-612x612-removebg-preview.png"
            className="lg:w-[600px] lg:h-[500px] w-full"
            alt="Login Image"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
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
            <div className="divider">OR</div>
            <div className="mb-3">
              <img
                onClick={handleGoogleLogin}
                className=" social-button cursor-pointer"
                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                alt=""
              />
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                New to the SportyKidz? Please{" "}
                <Link to="/register" className="text-info">
                  Register
                </Link>
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
