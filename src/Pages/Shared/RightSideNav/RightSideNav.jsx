import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram,  } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-2xl text-black font-bold">Log In With</h2>
                <br />
                <button className='btn btn-outline flex text-sky-500 w-full m-2 mx-auto'><FaGoogle></FaGoogle> Google LogIn</button>
                <button className='btn btn-outline flex text-black-500 w-full m-2 mx-auto'><FaGithub></FaGithub> Github LogIn</button>
            </div>
            <div className="p-4">
            <h2 className="text-2xl text-black font-bold">Find Us On</h2>
            <br />
            <a className='flex w-full mx-auto border justify-center items-center font-medium text-base py-2 gap-2' href=""><FaFacebook></FaFacebook> Facebook</a>
            <a className='flex w-full mx-auto border justify-center items-center font-medium text-base py-2 gap-2' href=""><FaTwitter></FaTwitter> Twitter</a>
            <a className='flex w-full mx-auto border justify-center items-center font-medium text-base py-2 gap-2' href=""><FaInstagram></FaInstagram> Instagram</a>

            </div>
            <div className='bg-slate-300 p-4'>
                <h2 className="text-xl font-semibold text-black">Q-Zone</h2>

            </div>
        </div>
    );
};

export default RightSideNav;