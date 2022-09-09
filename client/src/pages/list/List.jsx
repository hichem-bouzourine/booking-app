import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./list.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Options from "../../components/options/Options";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const handleIncrease = (name) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: options[name] + 1,
      };
    });
  };

  const handleDecrease = (name) => {
    const option = options[name];
    setOptions((prev) => {
      return {
        ...prev,
        [name]: option !== 0 ? options[name] - 1 : option,
      };
    });
  };

  return (
    <>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1>Search</h1>
            <div className="listSearchItem">
              <label className="listSearchLabel">
                Destination/property name:
              </label>
              <input
                className="listSearchInput"
                type="text"
                name="destination"
                id="destination"
                placeholder={destination}
              />
            </div>
            <div className="listSearchItem">
              <label className="listSearchLabel">Check-in/out date</label>
              <span
                className="listSearchText"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>

            <div className="listSearchItem">
              <label className="listSearchLabel">Options</label>
              <span
                className="listSearchText"
                onClick={() => setOpenOptions(!openOptions)}
              >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
              {openOptions && (
                <Options
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  options={options}
                />
              )}
            </div>
            <div className="listSearchPrices">
              <div className="minPrice">
                <span className="priceLabel">
                  Min price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                  className="priceInput"
                />
              </div>
              <div className="maxPrice">
                <span className="priceLabel">
                  Max price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMax(e.target.value)}
                  className="priceInput"
                />
              </div>
            </div>
            <div className="listSearchWork">
              <input type="checkbox" name="work" id="work" />
              <label htmlFor="work">I'm travelling for work</label>
            </div>
            <button className="searchButton">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
