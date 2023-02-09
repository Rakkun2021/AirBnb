import React, { createContext, useState, useEffect } from "react";

const CalendarContext = createContext();

const CalendarContextProvider = ({ children }) => {
  const [value, setValue] = useState([new Date(), new Date()]);
  const [selectedDays, setSelectedDays] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [completeDate, setCompleteDate] = useState(null);

  useEffect(() => {
    if (startDate && endDate) {
      setCompleteDate([startDate, endDate].join(" - "));
    }
  }, [startDate, endDate]);

  const clearSelected = () => {
    setValue([new Date(), new Date()]);
    setSelectedDays(null);
    setCompleteDate(null);
    setStartDate(null);
    setEndDate(null);
  };

  const formatWeekday = (locale, date) => {
    const weekday = date.toLocaleString(locale, { weekday: "short" });
    return weekday[0].toUpperCase() + weekday.slice(1, 3);
  };

  const handleSelect = (selectedRange) => {
    setValue(selectedRange);
    if (Array.isArray(selectedRange)) {
      const start = selectedRange[0];
      const end = selectedRange[1];

      const startMonth = start.toLocaleString("en-US", { month: "short" });
      const startDate = start.getDate();
      const startYear = start.getFullYear();

      const endMonth = end.toLocaleString("en-US", { month: "short" });
      const endDate = end.getDate();
      const endYear = end.getFullYear();

      const diff = Math.ceil(end - start) / 1000 / 60 / 60 / 24;
      setSelectedDays(Math.ceil(diff));
      setStartDate([[startDate, startMonth, startYear].join(" ")]);
      setEndDate([[endDate, endMonth, endYear].join(" ")]);
      setCompleteDate([startDate, endDate].join(" - "));
    } else {
      setSelectedDays(1);
    }
  };
  return (
    <CalendarContext.Provider
      value={{
        value,
        setValue,
        selectedDays,
        setSelectedDays,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        completeDate,
        setCompleteDate,
        clearSelected,
        formatWeekday,
        handleSelect,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export{ CalendarContext, CalendarContextProvider };
