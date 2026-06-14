import { useState } from "react";
import API from "../services/api";

const UserForm = ({ fetchUsers }: { fetchUsers: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email");
      return;
    }

    if (Number(age) < 1 || Number(age) > 120) {
      alert("Please enter a valid age");
      return;
    }

    try {
      await API.post("/users", {
        name,
        email,
        age: Number(age),
      });

      // Clear form
      setName("");
      setEmail("");
      setAge("");

      // Refresh user list
      fetchUsers();

      alert("User added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
