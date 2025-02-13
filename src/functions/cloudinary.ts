import { toast } from "react-toastify";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "../config/env.config";

export const uploadToCloudinary = async ({ selectedFile }) => {
  try {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      toast.error("Cloudinary upload failed");
      return {
        status: false,
        msg: "Cloudinary upload failed",
        data: null,
      };
    }

    const data = await response.json();

    if (data && !data.secure_url) {
      toast.error("Cloudinary upload failed");
      return {
        status: false,
        msg: "Cloudinary upload failed",
        data: null,
      };
    }

    return { status: true, msg: "Upload successful", data };
  } catch (error) {
    console.error("Error uploading to cloudinary:", error);
    if (error instanceof Error) {
      toast.error(error.message || "Cloudinary upload failed");
      return {
        status: false,
        msg: error.message || "Cloudinary upload failed",
        data: null,
      };
    } else {
      toast.error("Cloudinary upload failed");

      return {
        status: false,
        msg: "Cloudinary upload failed",
        data: null,
      };
    }
  }
};
