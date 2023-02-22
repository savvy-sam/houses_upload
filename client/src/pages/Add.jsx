import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {

    const [house, setHouse] = useState({
        name:"",
        price:"",
        location:"",
        images: "",
        type:"",
        description:""
      });
      const [error,setError] = useState(false)
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setHouse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8000/houses", house);
          navigate("/");
        } catch (err) {
          console.log(err);
          setError(true)
        }
      };
    
  return (
        <div className="form">
          <h1>Add New House</h1>
          <input
            type="text"
            placeholder="Name "
            name="name"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={handleChange}
          />
           <input
            rows={5}
            type="text"
            placeholder="Type"
            name="type"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Images"
            name="images"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Add</button>
          {error && "Something went wrong!"}
          <Link to="/">See all books</Link>
        </div>
  )
}

export default Add