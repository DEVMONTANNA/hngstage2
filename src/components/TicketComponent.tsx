import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonOutline from "./buttons/ButtonOutline";
import ButtonBg from "./buttons/ButtonBg";
import TicketFormHeader from "./header/TicketFormHeader";
import Divider from "./Divider";
import TicketForm from "./forms/TicketForm";
import TicketCard from "./cards/TicketCard";

const TicketComponent: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState(() => {
    return localStorage.getItem("selectedTicket") || "Regular";
  });
  const [ticketQuantity, setTicketQuantity] = useState(() => {
    return parseInt(localStorage.getItem("ticketQuantity") || "1", 10);
  });

  const tickets = ["Regular", "VIP", "VVIP"];
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/ticket-registration");
    localStorage.setItem("selectedTicket", selectedTicket);
    localStorage.setItem("ticketQuantity", ticketQuantity.toString());
    setSelectedTicket("Regular");
    setTicketQuantity(1);
  };
  const handleCancel = () => {
    localStorage.removeItem("selectedTicket");
    localStorage.removeItem("ticketQuantity");
    setSelectedTicket("Regular");
    setTicketQuantity(1);
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="mt-5 p-6 md:p-12 rounded-[32px] border border-[#0E464F] w-full max-w-[700px]">
        <TicketFormHeader step={1} title="Ticket Selection" />
        <div className="flex mt-6 justify-center items-center md:border md:border-[#0E464F] rounded-xl p-6">
          <div className="w-full">
            <TicketCard/>
            <Divider />
            <TicketForm
              ticketQuantity={ticketQuantity}
              tickets={tickets}
              selectedTicket={selectedTicket}
              setTicketQuantity={setTicketQuantity}
              setSelectedTicket={setSelectedTicket}
            />

            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <div className="block md:hidden w-full">
                <ButtonBg type="button" text="Next" handleClick={handleNext} />
              </div>
              <div className="block  md:hidden w-full">
                <ButtonOutline type="button" text="Cancel" handleClick={handleCancel} />
              </div>
              <div className="hidden md:block w-full">
                <ButtonOutline type="button" text="Cancel" handleClick={handleCancel} />
              </div>
              <div className="hidden md:block w-full">
                <ButtonBg type="button" text="Next" handleClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
