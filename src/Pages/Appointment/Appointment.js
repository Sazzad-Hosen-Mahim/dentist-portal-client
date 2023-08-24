import React, { useState } from "react";
import AppBanner from "./AppBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppBanner>
      <AvailableAppointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableAppointment>
    </div>
  );
};

export default Appointment;
