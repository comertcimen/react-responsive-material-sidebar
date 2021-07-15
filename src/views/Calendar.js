import React from "react";
import WithLayout from "../components/WithLayout";

const Calendar = () => {
  return (
    <WithLayout>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Calendar
      </div>
    </WithLayout>
  );
};

export default Calendar;
