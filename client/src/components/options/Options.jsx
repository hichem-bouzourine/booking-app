import "./options.css";

const Options = ({ onIncrease, onDecrease, options }) => {
  return (
    <div className="options">
      <div className="optionItem">
        <span className="optionText">Adult</span>
        <div className="counter">
          <button
            className="counterBtn"
            onClick={() => onDecrease("adult")}
            disabled={options.adult <= 1}
          >
            -
          </button>
          <span>{`${options.adult}`}</span>
          <button className="counterBtn" onClick={() => onIncrease("adult")}>
            +
          </button>
        </div>
      </div>
      <div className="optionItem">
        <span className="optionText">Children</span>
        <div className="counter">
          <button
            className="counterBtn"
            onClick={() => onDecrease("children")}
            disabled={options.children === 0}
          >
            -
          </button>
          <span>{`${options.children}`}</span>
          <button className="counterBtn" onClick={() => onIncrease("children")}>
            +
          </button>
        </div>
      </div>
      <div className="optionItem">
        <span className="optionText">Room</span>
        <div className="counter">
          <button
            className="counterBtn"
            onClick={() => onDecrease("room")}
            disabled={options.room <= 1}
          >
            -
          </button>
          <span>{`${options.room}`}</span>
          <button className="counterBtn" onClick={() => onIncrease("room")}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
