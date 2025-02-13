import React, { useEffect, useState } from "react";
import MyTicketComponent from "../components/MyTicketsComponent";
import { Link } from "react-router-dom";
import ButtonBg from "../components/buttons/ButtonBg";

interface User {
  name: string;
  email: string;
  selectedFile: string;
  specialRequest: string;
}

const MyTicket: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    selectedFile: "",
    specialRequest: "",
  });
  useEffect(() => {
    const getUserData = localStorage.getItem("user") || "{}";
    const parsedUserData = JSON.parse(getUserData);
    setUser(parsedUserData);
  }, []);
  return (
    <div>
      {!user?.name ? (
        <div className="flex  h-screen justify-center items-center bg-[#041E23]">
          <div>
            <h1 className="mt-2 text-center font-semibol text-lg text-white">
              You do not have any ticket.
            </h1>
            <div className="flex justify-center items-center">
              <Link
                to="/"
                className="mt-6 rounded-lg  px-6 py-3 text-lg font-medium text-white transition"
              >
                <ButtonBg type="button" text="Get A Ticket" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <MyTicketComponent />
      )}
    </div>
  );
};

export default MyTicket;
