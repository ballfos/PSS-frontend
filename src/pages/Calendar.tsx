import React, { useState } from "react";
import "./Calendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import choi_icon from "../assets/choi_icon.png";

function CalendarPage() {
  const [openAppts, setOpenAppts] = useState<Date | null>(null);

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  const handleDayClick = (
    value: Date,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpenAppts(value);
  };

  return (
    <div className="calendar">
      <h1>カレンダーページ</h1>
      <Calendar
        onClickDay={handleDayClick}
        tileContent={({ date, view }) =>
          view === "month" && isToday(date) ? (
            <div className="overlay-container">
              <img src={choi_icon} alt="today" className="icon-image" />
              <span className="date-text">{date.getDate()}</span>
            </div>
          ) : null
        }
        tileClassName={({ date, view }) => {
          if (view === "month") {
            if (isToday(date)) {
              return "today";
            }
            if (date.toDateString() === openAppts?.toDateString()) {
              return 'selected-date';
            }
            if (view === "month" && date.getDay() === 6) {
              return "saturday";
            }
          }
          return null;
        }}
      />
      {openAppts !== null && (
        <div className="appointments">
          今日の日付: {openAppts.toDateString()}
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
