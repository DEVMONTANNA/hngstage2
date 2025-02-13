import React, { useEffect, useState } from "react";
import TicketFormHeader from "./header/TicketFormHeader";
import eventLogo from "../assets/svgs/eventLogo.svg";
import dottedDivider from "../assets/dottedDivider.png";
import ButtonOutline from "./buttons/ButtonOutline";
import ButtonBg from "./buttons/ButtonBg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BarcodeComponent from "./BarCode";

interface Ticket {
  numberOfTickets: string;
  typeOfTicket: string;
}

interface User {
  name: string;
  email: string;
  selectedFile: string;
  specialRequest: string;
}

const MyTicketsComponent: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    selectedFile: "",
    specialRequest: "",
  });
  const [ticket, setTicket] = useState<Ticket>({
    numberOfTickets: "",
    typeOfTicket: "",
  });
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = localStorage.getItem("user") || "{}";
    const getUserTicketData = localStorage.getItem("userTicket") || "{}";
    const parsedUserData = JSON.parse(getUserData);
    const parsedUserTicketData = JSON.parse(getUserTicketData);
    setUser(parsedUserData);
    setTicket(parsedUserTicketData);
  }, []);

  const handleBookTicket = () => {
    navigate("/");
  };

  const handleDownload = () => {
    setProcessing(true);
    try {
      toast.success("Ticket downloaded successfully");
    } catch (error) {
      console.log("Error downloading ticket", error);
    } finally {
      setProcessing(false);
    }
  };
  return (
    <div className="min-h-screen text-white flex items-center justify-center p-2 md:p-4">
      <div className="mt-5 p-4 md:p-12 rounded-[32px]  bg-[#041E23] border border-[#0E464F] w-full max-w-[700px]">
        <TicketFormHeader step={3} title="Ready" />
        <div>
          <h1 className="text-center text-[32px] font-[700]">
            Your Ticket is Booked!
          </h1>
          <p className="hidden md:block text-center text-[16px]">
            Check your email for a copy or you can <b>download</b>
          </p>
          <p className="block md:hidden text-center text-[16px]">
            You can download or Check your email for a copy
          </p>
        </div>

        <div className="flex mt-6 justify-center items-center  rounded-xl w-full p-0 md:p-6">
          <div className="w-full flex justify-center items-center">
            <div className="w-full">
              <div className="ticket-border h-[700px] md:h-[679px] w-full">
                <div className="ticket-card h-[699px] md:h-[680px] w-full">
                  <div className="mx-[10px] md:mx-[30px] my-[45px]">
                    <div className="p-2 md:p-5 pb-0 border rounded-[16px] border-[#24A0B5]">
                      <div className="flex my-4 w-full justify-center items-center">
                        <img src={eventLogo} alt="Event Logo" />
                      </div>
                      <p className="text-center text-gray-400">
                        📍 04 Rumens Road, Ikoyi, Lagos
                      </p>
                      <p className="text-center text-gray-400">
                        📅 March 15, 2025 | 7:00 PM
                      </p>
                      <div className="flex w-full justify-center items-center mt-4">
                        <img
                          className="w-[140px] h-[140px] border-5 border-[#24A0B5] rounded-[12px]"
                          src={user?.selectedFile}
                          alt="User Profile"
                        />
                      </div>
                      <div className="w-full my-5 border border-gray-600 text-white p-4 rounded-2xl">
                        {/* Grid Layout */}
                        <div className="grid w-full grid-cols-2 gap-4 border-b border-gray-600 ">
                          <div>
                            <p className="w-full text-gray-400 break-words">
                              Enter your name
                            </p>
                            <p className="text-[12px] font-semibold w-full break-words">
                              {user?.name}
                            </p>
                          </div>
                          <div className="w-full border-l pb-4 border-gray-600 pl-4">
                            <p className="text-gray-400 w-full break-words">
                              Enter your email *
                            </p>
                            <p className="text-[12px] font-semibold w-full break-words">
                              {user?.email}
                            </p>
                          </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid w-full grid-cols-2 gap-4 border-b border-gray-600">
                          <div className="w-full  pt-4 pb-3">
                            <p className="text-gray-400 break-words">
                              Ticket Type:
                            </p>
                            <p className="text-[16px] font-semibold break-words">
                              {ticket?.typeOfTicket}
                            </p>
                          </div>
                          <div className="w-full border-l pt-4 border-gray-600 pl-4">
                            <p className="text-gray-400 break-words">
                              Ticket for :
                            </p>
                            <p className="text-[12px] font-semibold break-words">
                              {ticket?.numberOfTickets}
                            </p>
                          </div>
                        </div>

                        {/* Special Request */}
                        {user?.specialRequest && (
                          <div className="pt-3">
                            <p className="text-gray-400">Special request?</p>
                            <p className="text-[12px]">
                              {user?.specialRequest}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-[37px] dottedDivider md:top-[-5px] top-[-3px]">
                <img src={dottedDivider} alt="Divider" />
              </div>
              <div className="ticket-border2 w-full md:mt-[-8px] mt-[-5px]">
                <div className="ticket-card2 w-full md:px-8 px-2 mt-[1px] flex justify-center items-center">
                  <BarcodeComponent value={user?.selectedFile} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <div className="hidden md:block w-full">
            <ButtonOutline
              type="button"
              text="Book Another Ticket"
              handleClick={handleBookTicket}
            />
          </div>
          <div className="hidden md:block w-full">
            <ButtonBg
              type="submit"
              text="Download Ticket"
              handleClick={handleDownload}
              disabled={processing}
            />
          </div>
          <div className="block md:hidden w-full">
            <ButtonBg
              type="submit"
              text="Download Ticket"
              disabled={processing}
              handleClick={handleDownload}
            />
          </div>
          <div className="block  md:hidden w-full">
            <ButtonOutline
              type="button"
              text="Book Another Ticket"
              handleClick={handleBookTicket}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTicketsComponent;
