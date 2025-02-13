import React from "react";
import ButtonOutline from "./buttons/ButtonOutline";
import ButtonBg from "./buttons/ButtonBg";

const MyProjectComponent: React.FC = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center p-2 md:p-4">
      <div className="mt-5 p-6 rounded-[32px] w-full max-w-[700px]">
        <div className="flex justify-center items-center rounded-xl p-6">
          <div className="w-full">
            <div className="p-[24px] border border-[#197686] bg-[rgba(5,36,44,0.40)] rounded-2xl shadow-lg w-full">
              <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-center">
                  Event Ticket Booking UI – Open Source Practice Project 🎟️
                </h1>

                <section className="mt-6">
                  <h2 className="text-xl font-semibold">Overview</h2>
                  <p className="mt-2 text-white">
                    This is a beginner-friendly yet practical Event Ticket
                    Booking UI designed for developers to clone, explore, and
                    build upon. The design focuses on a seamless, login-free
                    ticket reservation flow, allowing users to book event
                    tickets quickly and efficiently.
                  </p>
                  <p className="mt-2 text-white">
                    The project consists of a three-step ticket booking flow,
                    and developers can extend it further by integrating payment
                    solutions, user authentication (optional), and ticket
                    validation systems.
                  </p>
                </section>

                <section className="mt-6">
                  <h2 className="text-xl font-semibold">Flow & Features</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">
                        1️⃣ Ticket Selection
                      </h3>
                      <ul className="list-disc list-inside text-white">
                        <li>
                          Users can browse available tickets (Free & Paid).
                        </li>
                        <li>
                          Ticket options are displayed in a list or card view.
                        </li>
                        <li>
                          For Free Tickets → Clicking “Get Free Ticket” proceeds
                          to attendee details.
                        </li>
                        <li>
                          For Paid Tickets → Clicking “Purchase Ticket” would
                          ideally open a payment modal.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        2️⃣ Attendee Details Form
                      </h3>
                      <ul className="list-disc list-inside text-white">
                        <li>
                          Users input their Name, Email, and optional Phone
                          Number.
                        </li>
                        <li>
                          Profile picture upload option with preview
                          functionality.
                        </li>
                        <li>
                          Ticket summary is visible to ensure users review their
                          details before submission.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        3️⃣ Payment or Success Page
                      </h3>
                      <ul className="list-disc list-inside text-white">
                        <li>
                          If the ticket is free, the user is taken directly to
                          the Ticket Confirmation Page.
                        </li>
                        <li>
                          If the ticket is paid, developers can integrate
                          Stripe, Paystack, or Flutterwave...
                        </li>
                        <li>
                          Upon successful booking, users should receive:
                          <ul className="list-disc pl-6">
                            <li>
                              A visual ticket preview with a unique QR Code.
                            </li>
                            <li>
                              An option to download the ticket as PDF or save it
                              to their device.
                            </li>
                            <li>
                              An email confirmation containing ticket details.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mt-6">
                  <h2 className="text-xl font-semibold">
                    How to Build This 🚀
                  </h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">
                        📌 Frontend (Next.js or React)
                      </h3>
                      <ul className="list-disc list-inside text-white">
                        <li>
                          Component Breakdown:
                          <ul className="list-disc pl-6">
                            <li>TicketCard.tsx → Displays ticket details</li>
                            <li>AttendeeForm.tsx → Captures user details</li>
                            <li>
                              PaymentModal.tsx → Handles payment processing
                            </li>
                            <li>
                              SuccessScreen.tsx → Shows the final ticket preview
                            </li>
                          </ul>
                        </li>
                        <li>
                          State Management: React’s Context API, Zustand, or
                          Redux (if needed).
                        </li>
                        <li>
                          File Handling: Firebase Storage, Cloudinary, or local
                          preview with URL.createObjectURL().
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        📌 Backend (Optional)
                      </h3>
                      <ul className="list-disc list-inside text-white">
                        <li>
                          If persistence is required, a backend can be built
                          using:
                        </li>
                        <li>Node.js & Express or Firebase Functions</li>
                        <li>
                          Database: MongoDB, PostgreSQL, or Firebase Firestore
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        📌 Payment Integration
                      </h3>
                      <ul className="list-disc list-inside text-white">
                        <li>For paid events, developers should integrate:</li>
                        <li>
                          Stripe Checkout (for international transactions)
                        </li>
                        <li>Paystack or Flutterwave (for African users)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mt-6">
                  <h2 className="text-xl font-semibold">
                    What You’ll Learn 🧑‍💻
                  </h2>
                  <ul className="list-disc list-inside text-white mt-4 text-left inline-block">
                    <li>
                      File handling & validation (profile picture uploads).
                    </li>
                    <li>Dynamic UI updates based on ticket selection.</li>
                    <li>Persisting bookings using local state or a backend.</li>
                    <li>Integrating payment gateways for ticket purchases.</li>
                    <li>
                      Generating & validating QR Codes for event check-in
                      (Advanced).
                    </li>
                  </ul>
                </section>

                <section className="mt-8 text-center">
                  <p className="text-lg font-medium">
                    Need Help? Reach Out! 💬
                  </p>
                  <p className="text-3xl mt-4">💛 Enjoy</p>
                </section>
              </div>
              <div className="px-[50px]">
                <div className="flex p-4 rounded-[18px] border border-[#0E464F] flex-col md:flex-row gap-3 mt-4">
                  <a
                    href="https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project"
                    target="_blank"
                    className="hidden md:block w-full"
                  >
                    <ButtonOutline type="button" text="Design File" />
                  </a>
                  <a
                    href="https://github.com/DEVMONTANNA/hngstage2.git"
                    target="_blank"
                    className="hidden md:block w-full"
                  >
                    <ButtonBg type="submit" text="Github code" />
                  </a>
                  <a
                    href="https://github.com/DEVMONTANNA/hngstage2.git"
                    target="_blank"
                    className="block md:hidden w-full"
                  >
                    <ButtonBg type="submit" text="Github code" />
                  </a>
                  <a
                    href="https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project"
                    target="_blank"
                    className="block  md:hidden w-full"
                  >
                    <ButtonOutline type="button" text="Design File" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectComponent;
