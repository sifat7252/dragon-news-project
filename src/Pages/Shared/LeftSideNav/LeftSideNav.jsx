import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">All Categories</h2>
            <div className="bg-slate-300 mx-auto rounded-md">
                <h2 className="lg:text-xl font-semibold px-12 py-4 ">National News</h2>
            </div>
            {
                categories?.map(category => <Link className="block ml-8 text-xl font-semibold text-slate-500" to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
            }
        </div>
        
    );
};

export default LeftSideNav;