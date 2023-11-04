import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const { id } = useParams(); // id from route parameter
    const [user, setUser] = useState({});
   
    useEffect(() => {
        fetch(`${API_URL}/users/${id}`)
          .then((res) => res.json())
          .then((result) => setUser(result));
      }, [id]);
   
      return (
        <div>
        <h1>User Details</h1>
        {user.id ? (
          <>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>User adress: {user.address.street}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
          </>
        ) : (
          <h1>Loading user details...</h1>
        )}
      </div>
      );
};
