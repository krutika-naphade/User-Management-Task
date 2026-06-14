import API from "../services/api";
import type { User } from "../types/User";

interface Props {
  users: User[];
  fetchUsers: () => void;
}


const UserList = ({ users, fetchUsers }: Props) => {
  const deleteUser = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/users/${id}`);
    fetchUsers();
  } catch (error) {
      console.error(error);
      alert("Error deleting user");
    }
  };

  return (
    <>
      <h2>User List</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button
  className="delete-btn"
  onClick={() => deleteUser(user._id!)}
>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
