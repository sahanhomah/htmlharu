import { useState } from 'react';
import './App.css';

function App() {
  const initialState = {
    email: "",
    password: "",
    number: ""
  };

  const [form, setForm] = useState(initialState);

  const onEmailChange = (event) => {
    setForm({ ...form, email: event.target.value });
  };

  const onPasswordChange = (event) => {
    setForm({ ...form, password: event.target.value });
  };

  const onNumberChange = (event) => {
    setForm({ ...form, number: event.target.value });
  };

  return (
    <>
      <label>Email:</label>
      <input value={form.email} onChange={onEmailChange} />

      <label>Password:</label>
      <input type="password" value={form.password} onChange={onPasswordChange} />

      <label>Phone:</label>
      <input value={form.number} onChange={onNumberChange} />

      <h1>Form Data:</h1>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
      <p>Phone: {form.number}</p>
    </>
  );
}

export default App;
