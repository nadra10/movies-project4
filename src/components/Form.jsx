import {useState} from "react";
import  './form.css'
import React from "react";


export default function Form ({moviesearch}) {
    
    const [formData, setFormData] = useState({
      searchterm: "",
    });
  
    
    const handleChange = (e) => {
    
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };
  
    const handleSubmit = (e) => {
      
      e.preventDefault();
    
      moviesearch(formData.searchterm);
    };
  
   
    return (
      <div className="search-container">
        <h2>Search More Movies</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
