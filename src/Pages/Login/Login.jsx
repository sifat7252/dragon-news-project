import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const { loginUser } = useContext(AuthContext)

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // ::: LOG IN USER 
        loginUser(email, password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })

    }

    

  return (
    <div>
      <Navbar></Navbar>
      <div className="border">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto m-24">
          <form onSubmit={handleLogIn} className="card-body">
            <h2 className="text-center text-2xl font-semibold my-4">Log In Your Account</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              New Here ?
              <Link to="/register">
                <button
                  className=" btn-link font-medium text-pink-500 transition-colors hover:text-blue-700"
                  href="#"
                >
                  Register
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
