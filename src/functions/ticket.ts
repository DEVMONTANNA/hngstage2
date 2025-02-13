type BuyTicket = {
  numberOfTickets: number;
  typeOfTicket: string;
  name: string;
  email: string;
  selectedFile: string;
  specialRequest?: string;
};

export const buyTicket = async ({
  numberOfTickets,
  typeOfTicket,
  name,
  email,
  selectedFile,
  specialRequest,
}: BuyTicket) => {
  localStorage.setItem(
    "userTicket",
    JSON.stringify({
      numberOfTickets,
      typeOfTicket,
    })
  );
  localStorage.setItem(
    "user",
    JSON.stringify({
      name,
      email,
      selectedFile,
      specialRequest,
    })
  );
  localStorage.removeItem("selectedTicket");
  localStorage.removeItem("ticketQuantity");
  localStorage.removeItem("registrationInput");
};
