import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searchResults/' + text);

    };
    
	return (
    <form className="container" onSubmit={submitHandler}>
        <div className="col-sm text-center m-2">
                    <input
                    className="form-control" 
                    placeholder="Search Your Recipe" 
                    aria-label="Search"
                    onChange={(e) => setText(e.target.value)}
                    type="text" 
                    value={text} 
                    autoFocus />
        <div className="container text-center m-2">
            <div className="btn btnSearch" type="submit"><span className="fas fa-search"></span> Search</div>
        </div>
        </div>
        <h1>{text}</h1>
    </form>
);
}
 
export default Search;