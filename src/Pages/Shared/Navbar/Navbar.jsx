import { Link } from "react-router-dom"
import userDefaultPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const Navbar = () => {

  const { user,  logOut } = useContext(AuthContext);

  const handleSignOut = ()=>{
    logOut()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

    const navLinks = 
    <> 
    <li className="/"><Link to="/">Home</Link></li>
    <li className=""><Link to="/about">About</Link></li>
    <li className=""><Link to="/career">Career</Link></li>
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userDefaultPic} />
        </div>
      </label>
      {
        user ?  <button onClick={handleSignOut} className="btn btn-sm lg:btn-md bg-slate-500 ml-3 text-white">LogOut</button> :

         <Link to='/login'>
         <button className="btn btn-sm lg:btn-md bg-slate-500  ml-3 text-white">Login</button>
         </Link>
      }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
