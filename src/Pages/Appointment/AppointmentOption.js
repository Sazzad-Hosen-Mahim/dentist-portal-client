import React from "react";

const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
  const { name, slots } = appointmentOptions;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center mt-12">
        <h2 className="text-2xl font-bold text-secondary text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => {
              setTreatment(appointmentOptions);
            }}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
