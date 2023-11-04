import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/users`)
    .then((res) => res.json())
    .then((result) => setUsers(result));
},[])

  return (
    <div>
      <h1>Total users found: {`${users.length}`}</h1>
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>Name: <Link to={`/userDetails/${user.id}`}>{user.name}</Link></p>
              <hr />
            </div>
          );
        })
      ) : (
        <h1>Loading your users!!!</h1>
      )}
    </div>
  );
};