"use client";
import React, { useCallback } from "react";

import TrackList from "./TrackList";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    }, [props.onNameChange]
  );

  return (
    <div className="
      m-2 p-2 grid justify-items-center
      ">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} 
      className="
      px-2 m-2 text-white bg-[#0b2f37] rounded-full 
      border-2 border-[#ee9985] outline-none focus:border-dashed 
      "/>
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button onClick={props.onSave} 
      className="
        px-2 style-script text-white text-xl rounded-lg 
        border-2 border-[#ee9985] hover:bg-[#ee9985]
      ">
        Save
      </button>
    </div>
  );
};

export default Playlist;