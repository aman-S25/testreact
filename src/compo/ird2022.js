import React from "react";
import Navbar from "./Navbar/Nav";
// import Sir from "./ContactCompo/Sir";
import Scheduler from "./ScheduleCompo/Schedule2022";
import Speakers from "./Home-Rest/Speakers";

function Contact() {
  return (
    <>
      <Navbar isnothome="true" />
      {/* <Sir /> */}
      <Scheduler />
      <Speakers />
    </>
  );
}

export default Contact;
