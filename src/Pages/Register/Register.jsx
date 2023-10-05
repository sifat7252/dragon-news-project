import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import  { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const {createUser } = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.PhotoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name, photoUrl)


        // ::: CREATE USER :::
        createUser(email, password)
        .then(result =>{
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
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-center text-2xl font-semibold my-4">Register Your Account</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                name="PhotoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Email</span>
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
                <span className="label-text text-lg font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <div className="inline-flex items-center mt-4">
              <label
                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  id="checkbox"
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="checkbox"
              >
                <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                  I agree the
                  <Link
                    className="font-medium transition-colors hover:text-pink-500"
                    href="#"
                  >
                    &nbsp;Terms and Conditions
                  </Link>
                </p>
              </label>
            </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white lg:text-xl text-base font-light">Register</button>
            </div>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Have an account ?
              <Link to="/login">
                <button
                  className=" btn-link font-medium text-pink-500 transition-colors hover:text-blue-700"
                  href="#"
                >
                  Login
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
        </div>
    );
};

export default Register;