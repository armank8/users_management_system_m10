import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h1>Users Management System</h1>
        <h3>Number of Users {users.length} </h3>
      </div>

      {/* Form  */}
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" placeholder="name" name="name" id="" />
          <br />
          <input type="text" placeholder="email" name="email" id="" />
          <br />
          <input type="submit" value="Add User" className="btn btn-primary" />
        </form>
      </div>

      {/* Data */}
      <div className="flex flex-col items-center bg-slate-400 p-4">
        {users.map((user) => (
          <p key={user.id}>
            {user.id}. {user.name} = {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
