import React, { useContext } from "react";
import Calendar from "react-calendar";
import "./newCal.css";
import { CalendarContext } from "../calendarContext/CalendarContext";

const NewCal = () => {
  const {
    value,
    selectedDays,
    completeDate,
    clearSelected,
    formatWeekday,
    handleSelect,
  } = useContext(CalendarContext);

  return (
    <div>
      <div className="stayAlert">
        {selectedDays ? (
          <p>{selectedDays} nights in London</p>
        ) : (
          <p>Select check-in date</p>
        )}
        {completeDate ? (
          <p>{completeDate}</p>
        ) : (
          <p>Add your travel dates for exact pricing</p>
        )}
      </div>
      <Calendar
        onChange={handleSelect}
        value={value}
        selectRange={true}
        showDoubleView={true}
        formatShortWeekday={formatWeekday}
        returnValue="range"
        nextLabel={<i className="fa-solid fa-caret-right"></i>}
        next2Label={<i className="fa-solid fa-forward"></i>}
        prevLabel={<i className="fa-solid fa-caret-left"></i>}
        prev2Label={<i className="fa-solid fa-backward"></i>}
        className="newCal"
      />
      <button onClick={clearSelected} className="clearButton">
        Clear date
      </button>
      {/* {selectedDays !== null ? (
        <div>Selected days: {selectedDays * 4000}</div>
      ) : null} */}
    </div>
  );
};

export default NewCal;
