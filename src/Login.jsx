import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Login = () => {
  // const [Id, setId] = useState("");
  const [names, setName] = useState("");
  const [password, setPass] = useState();
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // if (!Name.trim() || !Pass.trim()) {
    //   alert("Please fill out all fields!");
    //   return;
    // }
    if (names && password) {
      const newUser = { names, password };
      console.log(newUser);
      axios
        .post("http://localhost:8080/api/users", newUser)
        .then((response) => {
          console.log(response.data);
          setUsers([...Users, response.data]);
          setName("");
          setPass();
        })
        .catch((error) => console.error(error));
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container login-con d-flex justify-content-center align-items-center mb-5">
        <form
          className="form rounded-3 bg-light px-4 py-5 my-5"
          onSubmit={handleClick}
        >
          <h5 className="text-center fw-bold mb-5">LOGIN</h5>
          <div className="mb-3">
            <label htmlFor="name" className="mb-3 fw-bold">
              Username
            </label>
            <input
              className="form-control py-2"
              type="text"
              placeholder="Enter your username"
              id="name"
              value={names}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pass" className="mb-3 fw-bold">
              Password
            </label>
            <input
              className="form-control py-2"
              type="password"
              placeholder="Enter your password"
              id="pass"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="d-flex mb-3 justify-content-between">
            <p>Forgot password?</p>
            <p>New User? Register</p>
          </div>
          <button className="btn rounded-3 py-2 " type="submit">
            Login
          </button>
        </form>

        {Users.length > 0 && (
          <table className="table ">
            <thead>
              <tr>
              <th className="p-3 text-center">Id</th>
                <th className="p-3 text-center">Username</th>
                <th className="p-3 text-center">Age</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((user, index) => (
                <tr key={index}>
                  <td className=" p-2 text-center">{user.id}</td>
                  <td className=" p-2 text-center">{user.names}</td>
                  <td className=" p-2 text-center">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </React.Fragment>
  );
};

export default Login;
