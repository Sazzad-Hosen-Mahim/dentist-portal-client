import chair from "../../assets/images/chair.png";
import appointment from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="my-6"
      style={{
        background: `url(${appointment})`,
        backgroundPosition: "cover",
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBanner;
