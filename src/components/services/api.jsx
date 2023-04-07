import axios from "axios";

export const getDentistsData = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=4");
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};