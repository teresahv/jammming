import TrackList from "./TrackList";

const SearchResults = (props) => {
  return (
    <div className=" 
      m-2 p-2 bg-[#23434b] rounded-lg 
      drop-shadow-md grid justify-items-center
    ">
      <h2 className="text-xl p-1">
        Songs
      </h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;