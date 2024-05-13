import axios from "axios";
import { FieldValues } from "react-hook-form";
import { toastSuccess } from "../toastMessage";

export const uploadImage = async (file: FieldValues) => {
  const imageFile = file[0];
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await axios.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_REACT_APP_image_upload_api_key
    }`,
    formData
  );

  if (res.data.success) {
    toastSuccess("Image uploaded successfully.");
    return res.data.data.display_url;
  }
};
