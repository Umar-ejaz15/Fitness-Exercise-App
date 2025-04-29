import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Searching = () => {
  return (
    <div className="w-full h-screen mt-20 px-20">
      <div className="text-5xl text-blue-500 font-bold text-center">
        <h1>Awesome Exercises </h1>
        <h1>You Should Know</h1>
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <Input placeholder="Search Exercises" className="w-1/2" />
        <Button variant={"destructive"}>Search</Button>
      </div>
    </div>
  );
};

export default Searching;
