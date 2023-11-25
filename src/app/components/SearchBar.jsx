"use client";
import { TbMusicSearch } from "react-icons/tb";
import React, { useState, useCallback } from "react";


const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="p-2 flex items-center ">
      <input placeholder="What do you want to listen?" onChange={handleTermChange} 
      className="
      text-white bg-[#0b2f37] rounded-full
      border-2 border-[#958dc4] p-2 m-1 outline-none
      focus:border-dashed w-full
      "/>
      <button onClick={search} className=" 
       rounded-full bg-[#958dc4] p-2 m-1
      " >
        <TbMusicSearch size={26}
            className="
            text-[#0b2f37]
            cursor-pointer 
            hover:text-white 
            transition
            "
        />
      </button>
    </div>
  );
};

export default SearchBar;