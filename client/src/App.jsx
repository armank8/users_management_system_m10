import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <h1 className="text-center">Users Management System</h1>
        <h3 className="text-center">Number of Users {users.length} </h3>
      </div>

      {/* Form  onSubmit={}*/}
      <div>
        <form className="outline-none">
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
