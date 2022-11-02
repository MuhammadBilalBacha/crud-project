import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://636210337521369cd063b5e8.mockapi.io/crud-operation/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        Navigate("/mydata");
      });
    toast.success("User Updated Successfully !");
  };

  return (
    <div className="container py-5">
      <h3 className="text-center py-3 text-success">Update User</h3>
      <form action="" onSubmit={submitHandler}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="py-2">
            Name
          </label>
          <input
            type="text"
            placeholder="your name ?"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="py-2">
            Email
          </label>
          <input
            type="email"
            placeholder="your email ?"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update User
        </button>
      </form>
      <div className="d-flex justify-content-center py-5">
        <Link to="/mydata" className="w-100">
          {" "}
          <div className="btn btn-success"> Cancel </div>
        </Link>
      </div>
    </div>
  );
};

export default Edit;
