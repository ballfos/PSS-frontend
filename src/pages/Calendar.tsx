import React from "react";
import "./Calendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import choi_icon from "../assets/choi_icon.png";

function CalendarPage() {
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  return (
    <div className="calendar">
      <h1>カレンダーページ</h1>
      <Calendar
        tileContent={({ date, view }) =>
          view === "month" && isToday(date) ? (
            <div className="overlay-container">
              <img src={choi_icon} alt="today" className="icon-image" />
              <span className="date-text">{date.getDate()}</span>
            </div>
          ) : null
        }
        tileClassName={({ date, view }) => {
          if (isToday(date)) {
            return "today";
          }
          if (view === "month" && date.getDay() === 6) {
            return "saturday";
          }
          return null;
        }}
      />
    </div>
  );
}

export default CalendarPage;
