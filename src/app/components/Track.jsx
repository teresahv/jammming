"use client";
import React, { useCallback } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="text-[#ee9985] text-2xl" onClick={removeTrack}>
          <BsDashCircle />
        </button>
      );
    }
    return (
      <button className="text-[#ee9985] text-2xl" onClick={addTrack}>
        <BsPlusCircle />
      </button>
    );
  };

  return (
    <div className="
      p-2 grid grid-cols-[90%_10%] w-full items-center
      border-b-[1px] border-[#23434b]
    ">
      <div>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <div className="p-1 grid justify-end">
        {renderAction()}
      </div>

    </div>
  );
};

export default Track;