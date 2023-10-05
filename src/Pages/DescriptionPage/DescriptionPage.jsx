import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const DescriptionPage = () => {
    return (
        <div>
            <Header></Header>
            <h2>this is description page</h2>
            <div className=" border grid grid-cols-4 ">
                <div className="description-area col-span-3 border "><h2 className="text-5xl">description area</h2></div>
                <div className="rightSide-area col-span-1 border "><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default DescriptionPage;