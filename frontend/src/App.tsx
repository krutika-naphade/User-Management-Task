import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import API from "./services/api";
import type { User } from "./types/User";
import "./App.css";
function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Management System</h1>

      <UserForm fetchUsers={fetchUsers} />

      <hr />

      <UserList users={users} fetchUsers={fetchUsers} />
    </div>
  );
}

export default App;
