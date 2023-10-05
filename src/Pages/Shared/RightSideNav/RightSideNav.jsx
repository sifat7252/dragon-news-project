import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram,  } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="lg:text-2xl text-black font-bold">Log In With</h2>
                <br />
                <button className='btn btn-outline flex text-sky-500 w-full m-2 mx-auto'><FaGoogle></FaGoogle> Google LogIn</button>
                <button className='btn btn-outline flex text-black-500 w-full m-2 mx-auto'><FaGithub></FaGithub> Github LogIn</button>
            </div>
            <div className="p-4">
            <h2 className="lg:text-2xl text-black font-bold">Find Us On</h2>
            <br />
            <a className='flex w-full mx-auto border justify-center items-center font-medium text-base py-2 gap-2 rounded-t-lg' href=""><FaFacebook></FaFacebook> Facebook</a>
            <a className='flex w-full mx-auto border-x justify-center items-center font-medium text-base py-2 gap-2' href=""><FaTwitter></FaTwitter> Twitter</a>
            <a className='flex w-full mx-auto border justify-center items-center font-medium text-base py-2 gap-2 rounded-b-lg' href=""><FaInstagram></FaInstagram> Instagram</a>

            </div>
            <div className='bg-slate-100 p-4 space-y-3 mb-6 rounded-md lg:text-2xl '>
                <h2 className="text-xl font-semibold text-black">Q-Zone</h2>
                <img src={qzone1} alt="" className="" />
                <img src={qzone2} alt="" className="" />
                <img src={qzone3} alt="" className="" />

            </div>
        </div>
    );
};

export default RightSideNav;