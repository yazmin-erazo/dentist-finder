import axios from "axios";

export const getDentistsData = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=6");
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
