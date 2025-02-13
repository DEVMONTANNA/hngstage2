import ButtonBg from "../components/buttons/ButtonBg";

const LoadingScreen = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#041E23] text-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"></div>

      <p className="mt-4 text-2xl font-semibold">Loading, please wait...</p>

      <div className="mt-6">
        <ButtonBg type="button" text="Cancel" />
      </div>
    </div>
  );
};

export default LoadingScreen;
