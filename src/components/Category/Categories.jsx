import "./Categories.css";
import { truncate } from "../Utils/helper";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex-column">
      <div className="cards flex-row">
        {categories.map((category) => (
          <div key={category._id} className="card up-curve-borde">
            <img className="image" src={category.imageUrl} alt="Image" />
            <div className="card_main pl-3 mt-2 mb-1">
              <div className="card_topic mb-1">{category.categoryName}</div>
            </div>
            <div className="card_content pl-3 pr-1 mt-2">
              {truncate(category.description, 100)}
            </div>
            <div className="card_buttons mt-2">
              <Link to="/videos" className="card_button text-decoration-none">Watch Now </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/videos" className="watch_all_button mt-5 text-decoration-none"> Show All Videos </Link>
    </div>
  );
};

export default Categories;
