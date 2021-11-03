import React from "react";
import { FaSearch } from 'react-icons/fa'

const Search = ({ searchb }) => {
  return (
    <div className="optionsWrapper">
      <div className="optionsRow">
                <div className="searchBar">
                    <input className="searchQueryInput" type="text" placeholder="Search" onChange={searchb}/>
                    <button className="searchQuerySubmit" type="submit">
                        <FaSearch />
                    </button>
                </div>
            </div>
    </div>
  );
};
export default Search;
