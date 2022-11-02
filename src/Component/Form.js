import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://636210337521369cd063b5e8.mockapi.io/crud-operation", {
        name: name,
        email: email,
      })
      .then(() => {
        Navigate("/mydata");
      });
    setName("");
    setEmail("");
    toast.success("User Added Successfully !");
  };

  return (
    <div className="container py-5">
      <h3 className="text-center py-3 text-success">Add User</h3>
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
          Add User
        </button>
      </form>
      <div className="d-flex justify-content-center py-5">
        <Link to="/mydata" className="w-100">
          {" "}
          <div className="btn btn-success"> User's Data </div>
        </Link>
      </div>
    </div>
  );
};

export default FormData;
