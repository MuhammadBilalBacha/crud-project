import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./MyData.css";

const MyData = () => {
  const [data, setData] = useState([]);

  const Navigate = useNavigate();

  function fetchApi() {
    axios
      .get("https://636210337521369cd063b5e8.mockapi.io/crud-operation")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }

  const deleteHandle = (del) => {
    axios
      .delete(
        `https://636210337521369cd063b5e8.mockapi.io/crud-operation/${del}`
      )
      .then(() => {
        fetchApi();
      });
    toast.success("User deleted successfully !");
  };

  const editHandler = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    Navigate("/edit");
  };

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch(
    //     "https://636210337521369cd063b5e8.mockapi.io/crud-operation"
    //   );
    //   const mydata = await res.json();
    //   setData(mydata);
    //   //   console.log(data);
    // }
    // fetchData();
    fetchApi();
  });

  return (
    <div className="container py-5">
      <div className="d-flex mb-5 justify-content-evenly">
        <Link to="/">
          <button className="mybutton py-2 px-3">
            {" "}
            <BsFillArrowLeftCircleFill className="me-1" /> Go back
          </button>
        </Link>
        <h3 className="text-center"> All User's </h3>
      </div>
      {data.map((users) => {
        console.log(users);
        return (
          <div
            className="d-flex myCard mb-3 justify-content-between"
            key={users.id}
          >
            <div className="mx-2">
              <div className="py-2">{users.name}</div>
              <div className="py-2">{users.email}</div>
            </div>
            <div className="d-flex mx-2">
              <button
                className="btn btn-success align-self-center mx-2"
                onClick={() => editHandler(users.id, users.name, users.email)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger align-self-center mx-2"
                onClick={() => deleteHandle(users.id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyData;
