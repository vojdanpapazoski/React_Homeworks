import { useState } from 'react';

export const Input = () => {
  const initialValues = { name: '', surname: '', email: '', password: '', age: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.name.trim() === '' &&
      formValues.surname.trim() === '' &&
      formValues.email.trim() === '' &&
      formValues.password.trim() === '' &&
      formValues.age.trim() === ''
    ) {
      return; 
    }

    setUsers((prevUsers) => [...prevUsers, formValues]);

    setFormValues(initialValues);
  };

  return (
    <div>
      <div className="login-form">
        <form>
          <h1>Login Form</h1>
          <div>
            <label>Name</label>
            <br />
            <input
              name="name"
              placeholder="Name"
              required
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Surname</label>
            <br />
            <input
              name="surname"
              placeholder="Surname"
              value={formValues.surname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              name="email"
              placeholder="enter email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              name="password"
              placeholder="enter password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age</label>
            <br />
            <input
              name="age"
              placeholder="age"
              value={formValues.age}
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="button" onClick={handleSubmit} >
            Add New User
          </button>
          <br />
          <button type="button" onClick={() => setIsSubmit(!isSubmit)}>
            {isSubmit ? 'Hide Users' : 'Show Users'}
          </button>
          {isSubmit && (
            <div>
              <h2>All Users</h2>
              <table border ={10} cellSpacing={3}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.surname}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}