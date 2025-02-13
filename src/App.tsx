import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("./pages/Home"));
const TicketRegistration = lazy(() => import("./pages/TicketRegistration"));
const MyTickets = lazy(() => import("./pages/MyTickets"));
const AboutProject = lazy(() => import("./pages/AboutProject"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LoadingScreen = lazy(() => import("./components/LoadingScreen"));
const Header = lazy(() => import("./components/header/Header"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen/>}>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket-registration" element={<TicketRegistration />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/my-project" element={<AboutProject />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
