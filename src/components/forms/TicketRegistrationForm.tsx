import React, { useState, useEffect } from "react";
import { CloudUpload } from "lucide-react";
import envelope from "../../assets/svgs/envelope.svg";
import Divider from "../Divider";
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../buttons/ButtonOutline";
import ButtonBg from "../buttons/ButtonBg";
import { toast } from "react-toastify";
import { uploadToCloudinary } from "../../functions/cloudinary";
import { buyTicket } from "../../functions/ticket";

interface FormInput {
  name: string;
  email: string;
  specialRequest: string;
  selectedFile: File | null;
}

const TicketRegistrationForm: React.FC = () => {
  const [form, setForm] = useState<FormInput>(() => {
    const savedForm = localStorage.getItem("registrationInput");
    return savedForm
      ? JSON.parse(savedForm)
      : { name: "", email: "", specialRequest: "", selectedFile: null };
  });
  const [processing, setProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const { name, email, specialRequest, selectedFile } = form;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("registrationInput", JSON.stringify(form));
  }, [form]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, selectedFile: file }));
  };

  const validateInput = () => {
    const errors: { [key: string]: string } = {};

    if (!selectedFile) errors.selectedFile = "Image is required";
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setProcessing(true);
    if (!validateInput()) return setProcessing(false);

    if (!selectedFile) {
      toast.error("Please select a file.");
      return setProcessing(false);
    }

    try {
      const result = await uploadToCloudinary({ selectedFile });
      const ticketQuantity = localStorage.getItem("ticketQuantity") || "";
      const selectedTicket = localStorage.getItem("selectedTicket") || "";
      buyTicket({
        numberOfTickets: Number(ticketQuantity),
        typeOfTicket: selectedTicket,
        name: form.name,
        email: form.email,
        selectedFile: result?.data.secure_url,
        specialRequest: form.specialRequest,
      })
      toast.success("Registration successful.");

      navigate("/my-tickets");
      setForm({
        name: "",
        email: "",
        selectedFile: null,
        specialRequest: "",
      });
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        toast.error(error.message || "Registration. Please try again.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-[24px] pb-[48px] bg-[rgba(5,36,44,0.40)] border border-[#197686] rounded-2xl shadow-lg w-full">
        <h2 className="text-white text-[16px] font-[400] mb-4">
          Upload Profile Photo
        </h2>

        <div className="bg-[rgba(0,0,0,0.20)] mt-[30px] h-[200px] w-full flex flex-col items-center justify-center max-w-lg">
          {selectedFile && selectedFile.type?.startsWith("image/") && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="object-cover h-[200px] w-full blur-md opacity-[0.5] rounded-xl"
            />
          )}
        </div>

        <div className="relative mt-[-220px] w-full flex flex-col items-center justify-center max-w-lg">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-[240px] h-[240px] bg-[#0E464F] border-[4px] border-[rgba(36,160,181,0.50)] rounded-[32px] cursor-pointer hover:bg-[#0E2D35] transition-all relative overflow-hidden"
          >
            {}
            {selectedFile && selectedFile.type?.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="absolute w-full h-full object-cover rounded-xl"
              />
            ) : selectedFile && selectedFile.name ? (
              <p className="text-white text-center px-4 z-10">
                {selectedFile.name}
              </p>
            ) : (
              <>
                <CloudUpload size={40} className="text-[#3C8991] mb-2 z-10" />
                <p className="text-[#FFF] text-center text-sm z-10">
                  Drag & drop or click to upload
                </p>
              </>
            )}
            {formErrors.selectedFile && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.selectedFile}
              </p>
            )}
          </label>
        </div>

        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <div className="mt-4">
        <Divider />
      </div>

      <div className="mt-4">
        <label className="text-white text-base md:text-lg">
          Enter your name
        </label>
        <input
          className="w-full p-2 mt-1 bg-transparent focus:border-[#258796] focus:border-2 border border-[#07373F] cursor-pointer focus:outline-none rounded-lg"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="text-white text-base md:text-lg">
          Enter your email *
        </label>
        <div className="relative">
          <img
            className="absolute top-[12px] left-[10px]"
            src={envelope}
            alt="Envelope"
          />
          <input
            className="w-full pl-[40px] p-2 mt-1 bg-transparent focus:border-[#258796] focus:border-2 border border-[#07373F] cursor-pointer focus:outline-none rounded-lg"
            type="email"
            value={email}
            placeholder="hello@avioflagos.io"
            name="email"
            onChange={handleChange}
          />
        </div>
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="text-white text-base md:text-lg">
          Special request?
        </label>
        <textarea
          className="w-full h-[124px] p-2 mt-1 bg-transparent focus:border-[#258796] focus:border-2 border border-[#07373F] cursor-pointer focus:outline-none rounded-lg"
          value={specialRequest}
          name="specialRequest"
          placeholder="TextArea"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-4">
        <div className="hidden md:block w-full">
          <ButtonOutline
            type="button"
            text="Back"
            handleClick={() => navigate(-1)}
          />
        </div>
        <div className="hidden md:block w-full">
          <ButtonBg
            type="submit"
            text={processing ? "Processing..." : "Get My Free Ticket"}
            disabled={processing}
            handleClick={handleSubmit}
          />
        </div>
        <div className="block md:hidden w-full">
          <ButtonBg
            type="submit"
            text={processing ? "Processing..." : "Get My Free Ticket"}
            disabled={processing}
            handleClick={handleSubmit}
          />
        </div>
        <div className="block  md:hidden w-full">
          <ButtonOutline
            type="button"
            text="Back"
            handleClick={() => navigate(-1)}
          />
        </div>
      </div>
    </form>
  );
};

export default TicketRegistrationForm;
