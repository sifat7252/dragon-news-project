import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"

const BreakingNews = () => {
  return (
    <div className="flex bg-slate-200 p-3 rounded-md">
        <div className="bg-pink-500 rounded-xl text-center flex text-white justify-center p-4"><Marquee>Breaking News !!!</Marquee></div>
      
      <Marquee pauseOnClick={true} speed={100} pauseOnHover={true}>
      <Link className="mr-12 text-xl text-red-600" to='/'>I can be a React component, multiple React components, or just some
        text.......</Link>
      <Link className="mr-12 text-xl text-red-600" to='/'>I can be a React component, multiple React components, or just some
        text.......</Link>
      <Link className="mr-12 text-xl text-red-600" to='/'>I can be a React component, multiple React components, or just some
        text.......</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
