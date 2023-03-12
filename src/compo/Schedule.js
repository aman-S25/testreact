import React from "react";
import Navbar from "./Navbar/Nav";
import Scheduler from "./ScheduleCompo/Schedule2023";

function Schedule() {
  return (
    <>
      <Navbar isnothome="true" />
      <Scheduler />
    </>
  );
}

export default Schedule;
