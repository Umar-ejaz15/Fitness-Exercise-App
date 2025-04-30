import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { bodyPartsList, fetchExercises } from "@/services/ExercisesDataServices";
import React, { useEffect, useState } from "react";

const Searching = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  // Fetch data once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const exercisesData = await fetchExercises();
        setExercises(exercisesData);

        const bodyPartsData = await bodyPartsList();
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();
    
    // Perform the search operation on the already fetched exercises
    const filteredData = exercises.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.target.toLowerCase().includes(search) ||
        item.equipment.toLowerCase().includes(search) ||
        item.bodyPart.toLowerCase().includes(search)
    );
    
    console.log(filteredData); // Log the filtered exercises
    setExercises(filteredData); // Update state with filtered exercises
  };

  return (
    <div className="w-full h-screen mt-20 px-20">
      <div className="text-5xl text-blue-500 font-bold text-center">
        <h1>Awesome Exercises </h1>
        <h1>You Should Know</h1>
      </div>
      <form onSubmit={onSave} className="flex justify-center items-center gap-4 mt-10">
        <Input
          onChange={handleInput}
          placeholder="Search Exercises"
          className="w-1/2"
        />
        <Button variant={"destructive"}>Search</Button>
      </form>
      <div>
        {bodyParts.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Searching;
