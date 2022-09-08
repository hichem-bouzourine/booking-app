import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <div className="searchItemColumns">
        <div className="searchItemColumn">
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/296045459.webp?k=088ead47effd8efd25ac030c20d9b8e671e27150c4c673410e4854329566451f&o=&s=1"
            alt=""
          />
        </div>

        <div className="searchItemColumn">
          <h1 className="title">Tower Street Apartments</h1>
          <span className="distance">500m from center</span>
          <span className="taxiOp">Free airport taxi</span>
          <span className="subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="features">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
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
            <span className="price">$112</span>
            <span className="taxOp">Includes taxes and fees</span>
            <button className="checkButton">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
