import { api } from "../../../services/axiosSetup";

export const getInstrumentData = async () => {
  try {
    const data = api.get("/instruments");
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
