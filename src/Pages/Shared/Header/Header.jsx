import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mx-7'>
            <img className='mx-auto my-4' src={logo} alt="" />
            <p className='my-2'>Journalism Without Fear or Favour</p>
            <p className="lg:text-xl my-2 font-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;