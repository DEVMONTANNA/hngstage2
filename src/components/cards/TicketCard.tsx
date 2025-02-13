import React from "react";
import eventLogo from "../../assets/svgs/eventLogo.svg";

const TicketCard: React.FC = () => {
  return (
    <div>
      <div className="eventContainer p-4 w-full my-3 mb-5 text-center">
        <img src={eventLogo} alt="Event Logo" className="mx-auto" />
        <p className="text-sm md:text-base mt-2">
          Join us for an unforgettable experience at <br />
          [Event Name]! Secure your spot now.
        </p>
        <br />
        <p>📍 [Event Location] || March 15, 2025 | 7:00 PM</p>
      </div>
    </div>
  );
};

export default TicketCard;
