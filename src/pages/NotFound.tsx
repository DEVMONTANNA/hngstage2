import { Link } from "react-router-dom";
import ButtonBg from "../components/buttons/ButtonBg";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#041E23] text-gray-800 dark:text-white">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
      <p className="mt-2 text-lg text-white">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg  px-6 py-3 text-lg font-medium text-white transition"
      >
        <ButtonBg type="button" text="Go Back Home" />
      </Link>
    </div>
  );
};

export default NotFound;
