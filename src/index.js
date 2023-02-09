import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./components/dataContext/DataContext";
import "swiper/css/bundle";
import { CalendarContextProvider } from "./components/calendarContext/CalendarContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalendarContextProvider>
      <BrowserRouter>
        <DataProvider>
          <App />
        </DataProvider>
      </BrowserRouter>
    </CalendarContextProvider>
  </React.StrictMode>
);
