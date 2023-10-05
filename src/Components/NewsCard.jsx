import PropTypes from "prop-types";
import { BiShareAlt, BiBookmark } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  //   const {
  // _id,
  // rating,
  // total_view,
  // title,
  // name,
  // published_date,
  // author,
  // image_url,
  // details,
  // thumbnail_url,
  //   } = {news};

  return (
    <div className="mb-6 shadow-xl">
      <div className="bg-slate-200 flex justify-between items-center  px-5 py-4 rounded-lg">
        <div className="flex items-center gap-3 rounded-r-md">
          <div>
            <img
              className="rounded-full h-10 w-10"
              src={news.author.img}
              alt=""
            />
          </div>
          <div className="name-date  ">
            <h2 className="text-xl font-semibold">{news.author.name}</h2>
            <h2 className="text-sm font-normal">
              {news.author.published_date}
            </h2>
          </div>
        </div>
        <div className="share-bookmark border flex text-2xl gap-4">
          <BiBookmark></BiBookmark>
          <BiShareAlt></BiShareAlt>
        </div>
      </div>
      <div className="">
        <div className="card  bg-base-100 ">
          <h2 className="card-title text-xl font-bold m-3">{news.title}</h2>
          <figure>
            <img src={news.image_url} alt="thumbnail" />
          </figure>
          <div className="card-body">
            <p>{news.details}<Link to={'/description'}><span className="text-indigo-500 font-semibold">Read More..</span></Link></p>
            <hr />
            <div className="card-actions flex justify-between mt-2 ">
              
                <div className="rating rating-md gap-2 items-center">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  {news.rating.number}
                </div>
              
              <div className="flex gap-2 items-center">
                <FaEye></FaEye> {news.total_view}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.node,
};
