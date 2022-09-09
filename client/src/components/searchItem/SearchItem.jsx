import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ data: hotel }) => {
  return (
    <div className="searchItem">
      <div className="searchItemColumns">
        <div className="searchItemColumn">
          <img src={hotel.photos[0]} alt="" />
        </div>

        <div className="searchItemColumn">
          <h1 className="title">{hotel.name}</h1>
          <span className="distance">{hotel.distance}m from center</span>
          <span className="taxiOp">Free airport taxi</span>
          <span className="subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="features">{hotel.desc}</span>
          <span className="cancelOp">Free cancellation </span>
          <span className="cancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>

        <div className="details">
          <div className="rating">
            <div className="reviews">
              <h4>Review score</h4>
              <p>453 reviews</p>
            </div>
            <div className="rate">6.3</div>
          </div>
          <div className="texts">
            <span className="price">${hotel.cheapestPrice}</span>
            <span className="taxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${hotel._id}`}>
              <button className="checkButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
