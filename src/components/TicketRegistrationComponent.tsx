import React from "react";
import TicketFormHeader from "./header/TicketFormHeader";
import TicketRegistrationForm from "./forms/TicketRegistrationForm";

const TicketRegistrationComponent: React.FC = () => {


  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="mt-5 p-6 md:p-12 rounded-[32px] border border-[#0E464F] w-full max-w-[700px]">
        <TicketFormHeader step={2} title="Attendee Details" />

        <div className="flex mt-6 justify-center items-center md:border md:border-[#0E464F] rounded-xl p-6">
          <div className="w-full">
            <TicketRegistrationForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketRegistrationComponent;
