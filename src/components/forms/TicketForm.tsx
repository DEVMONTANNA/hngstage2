import React from "react";

interface TicketFormProps {
  ticketQuantity: number;
  setTicketQuantity: (value: number) => void;
  setSelectedTicket: (value: string) => void;
  tickets: string[];
  selectedTicket: string;
}

const TicketForm: React.FC<TicketFormProps> = ({
  ticketQuantity,
  tickets,
  selectedTicket,
  setTicketQuantity,
  setSelectedTicket,
}) => {
  return (
    <>
      <div className="mt-4">
        <label className="text-white text-base md:text-lg">
          Number of Tickets
        </label>
        <select
          className="w-full p-2 mt-1 bg-transparent border border-[#07373F] cursor-pointer focus:outline-none rounded-lg"
          value={ticketQuantity}
          onChange={(e) => setTicketQuantity(Number(e.target.value))}
        >
          {[...Array(10).keys()].map((n) => (
            <option  key={n} value={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <h2 className="text-white text-base md:text-lg">Select Ticket Type:</h2>
        <div className="p-4 bg-[#042127] rounded-xl border border-[#07363e]">
          <div className="flex flex-wrap justify-between gap-3 ">
            {tickets.map((ticket) => (
              <div
                key={ticket}
                className={`w-full md:w-[158px]  h-[110px] p-3  cursor-pointer rounded-xl border-2 flex flex-col justify-start items-start gap-3 overflow-hidden ${
                  selectedTicket === ticket
                    ? "border-[#24A0B5] bg-[#197686]"
                    : "border-[#197686]"
                }`}
                onClick={() => setSelectedTicket(ticket)}
              >
                <span className="text-white text-lg md:text-2xl font-semibold">
                  {ticket === "Regular" ? "Regular" : "$150"}
                </span>
                <span className="text-neutral-50 text-sm md:text-base uppercase">
                  {ticket} Access
                </span>
                <p className="mt-[-5px]">20/52</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketForm;
