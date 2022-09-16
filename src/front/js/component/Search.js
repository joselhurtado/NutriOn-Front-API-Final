import React, { useEffect, useState } from "react";

export const Search = ({ getQuery }) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

	return (
    <div className="row">
        <div className="col-sm">
                    <input type="search" 
                    className="form-control" 
                    placeholder="Search Your Recipe" 
                    aria-label="Search"
                    value={text} 
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus />
        </div>
        <div className="col-sm-2">
            <div className="btn btnSearch" type="submit"><span className="fas fa-search"></span> Search</div>
        </div>
    </div>

);
}


export default Search;