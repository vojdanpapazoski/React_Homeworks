import React, { useState } from 'react';

export const NewMovie = () => {
    const [formData, setFormData] = useState({ movieName: '', genre: '', rating: ''});

    const handleInputChange = (e) => {
        const { id, value } = e.target;    
        setFormData({ ...formData, [id]: value });
    };
    // Extract the 'id' and 'value' properties from the event object 'e.target'.
    // Update the form data state using the 'setFormData' function.
    // We use the spread operator '...' to create a copy of the existing 'formData' object
    // and update only the specific property identified by 'id' with the new 'value'.

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="movieName"
                placeholder="Add Movie Name"
                value={formData.movieName}
                onChange={handleInputChange}
            />
            <br /><br />
            <input
                type="text"
                id="genre"
                placeholder="Add Genre"
                value={formData.genre}
                onChange={handleInputChange}
            />
            <br /><br />
            <input
                type="text"
                id="rating"
                placeholder="Add Rating"
                value={formData.rating}
                onChange={handleInputChange}
            />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    );
};
