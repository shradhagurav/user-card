import React, { useState } from "react";
import Card from "./Card";

const Users = () => {
  const [inputText, setInputText] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputText);
    // setInputText("");
    setIsSubmitted(true);
   
  };

  const handleChange = (e) => {
    setInputText(e.target.value);

  };

  const renderForm = (
    <div className=" h-screen bg-gray-200 w-full flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={inputText}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );

  return <>{isSubmitted ? <Card username={inputText} /> : renderForm}</>;
};

export default Users;
