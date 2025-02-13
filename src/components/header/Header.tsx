import React from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  //   const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/my-tickets");
  };
  return (
   <div className="md:px-[100px] px-2">
     <header className="bg-[rgba(5,36,44,0.40)] rounded-[24px] border border-[#197686] px-[16px] py-[12px] flex justify-between items-center shadow-lg relative">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="w-32" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="text-[#B3B3B3] text-[18px] font-[JejuMyeongjo] hover:text-white"
        >
          Events
        </Link>
        <Link
          to="/my-tickets"
          className="text-[#B3B3B3] font-[JejuMyeongjo] hover:text-white"
        >
          My Tickets
        </Link>
        <Link
          to="/my-project"
          className="text-[#B3B3B3] font-[JejuMyeongjo] hover:text-white"
        >
          About Project
        </Link>
      </nav>

      {/* Buttons */}
      <button
        onClick={handleNext}
        className=" px-4 py-2 font-[JejuMyeongjo] bg-white cursor-pointer text-black hover:bg-[#cfcfcf] rounded-lg"
      >
        MY TICKETS →
      </button>

      {/* Mobile Menu Toggle */}
      {/* <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button> */}

      {/* Mobile Nav */}
      {/* {menuOpen && (
        <div className="absolute z-50 top-16 left-0 w-full bg-[#05242C] flex flex-col items-center py-4 rounded-lg shadow-lg md:hidden">
          <a href="#" className="text-[#B3B3B3] text-lg py-2 hover:text-white">
            Events
          </a>
          <a href="#" className="text-[#B3B3B3] text-lg py-2 hover:text-white">
            My Tickets
          </a>
          <a href="#" className="text-[#B3B3B3] text-lg py-2 hover:text-white">
            About Project
          </a>
         
        </div>
      )} */}
    </header>
   </div>
  );
};

export default Header;
