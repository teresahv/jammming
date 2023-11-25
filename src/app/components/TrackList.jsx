import Track from "./Track";

const TrackList = (props) => {
  return (
    <div className="
    m-2 p-2 bg-[#3b585e] rounded-lg 
    drop-shadow-md grid justify-items-center w-full
    ">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;