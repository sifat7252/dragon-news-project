import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-3">
        <div className="left-side border  ">
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="middle border md:col-span-2">
            <h2 className="text-2xl">News is coming soon!!!!</h2>
        </div>
        <div className="right-side ">
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
