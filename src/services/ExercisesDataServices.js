import axios from "axios";

const options = {
  method: "GET",
  params: {
    limit: "1000", // Try a higher number like 100, 500, or 1000
    offset: "0",
  },

  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

console.log(import.meta.env.VITE_RAPID_API_KEY);

const fetchExercises = async () => {
  try {
    const response = await axios.request(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const bodyPartsList = async () => {
  try {
    const response = await axios.request(
      "https://exercisedb.p.rapidapi.com/bodyPartList",
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchExercises, bodyPartsList };
