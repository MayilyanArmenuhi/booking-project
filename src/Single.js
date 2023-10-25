import React, { useEffect } from "react";
import { hotels } from "./hotels";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.module.css";

export default function Single() {
  const singleIndex = useSelector((state) => state.singleIndex);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const firstDate = useSelector((state) => state.firstDate);
  const [lastDate, setLastDate] = useState(0); 
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const [max, setMax] = useState();
  let arr = [];

  useEffect(() => {
    if (firstDate !== 0 && lastDate !== 0 && !dateRange.includes(null)) {
      arr = [];
      let alllist = document.querySelectorAll(".react-datepicker__day");
      alllist.forEach((item) => {
        if (item.getAttribute("aria-selected") == "true") {
          arr.push(item.innerText);
        }
      });
    }
    setMax(Math.max(...arr));
  }, [lastDate]);


  useEffect(() => {
    dispatch({type:'FIRST__DATE', payload: +JSON.stringify(startDate).slice(9, 11)})
    setLastDate(+JSON.stringify(endDate).slice(9, 11));
    if (firstDate !== 0 && lastDate !== 0 && !dateRange.includes(null)) {
      setTotal(
        lastDate < firstDate ? max - firstDate + lastDate : lastDate - firstDate
      );
    }
  });

  return (
    <div className="single__container">
      <div className="single__item">
        <h2>{hotels[singleIndex].name}</h2>
        <img src={hotels[singleIndex].picture} alt="" />
        <a href="#">{hotels[singleIndex].distance}</a>
        <p>{hotels[singleIndex].info}</p>
        <h3>1 day price is {hotels[singleIndex].price}$</h3>
      </div>
      <div className="calendar">
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          showDisabledMonthNavigation
          inline
          lastDate="true"
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
        {dateRange.includes(null) ? (
          <h2>Calculate your days</h2>
        ) : (
          <h2>
            {total} day price is {hotels[singleIndex].price * total}$
          </h2>
        )}
        <p className="please">Please fill all fields*</p>
        <form>
          <label>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
          </label>
          <input type="email" placeholder="Email" />
          <div className="phone-label">
            <input type="text" placeholder="+374" />
            <input type="text" placeholder="99" />
            <input type="text" placeholder="xx" />
            <input type="text" placeholder="xx" />
            <input type="pasword" placeholder="xx" />
          </div>
          <button>Book Now</button>
        </form>
      </div>
    </div>
  );
}
