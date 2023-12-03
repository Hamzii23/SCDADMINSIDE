import React, { useEffect, useState } from "react";
import "../ArticalesView/articalsViewStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ArticlesRecord() {
  const navigation = useNavigate();
  const [ArticlesRecord, setDoctorRecord] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        var userData = await window.localStorage.getItem("userData");
        userData = JSON.parse(userData);

        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/AllArticales",
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        setDoctorRecord(response.data.allData);
        // console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //////////////////////////////////////
  const handleEdit = async (articles) => {
    await localStorage.setItem("articales", JSON.stringify(articles));
    navigation(`/Articles`);
  };
  const handleAdd = async (articles) => {
    await localStorage.setItem("articales", JSON.stringify(articles));
    navigation(`/Articles`);
  };
  /////////////////////////////////////////////////////////////
  const handleDelete = async (articles) => {
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);
    const response = await axios.delete(
      `http://localhost:3000/api/v1/admin/articalesdelete/${articles._id}`,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    if (response.error) {
      alert("NetWork Problem");
    }
    alert("Record Updated");
    window.location.reload();
  };
  return (
    <div className="main-section">
      <div
        style={{
          flexDirection: "row",
          width: "140%",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginRight: "85%" }}>Articles Mangement</h3>
        <button
          style={{
            width: 100,
            backgroundColor: "green",
            marginLeft: "90%",
          }}
          onClick={() => {
            handleAdd("");
          }}
        >
          Add
        </button>
      </div>
      {ArticlesRecord?.map((articles) => (
        <div className="main-card">
          <div className="user-info">
            <div className="user-pic">
              <img
                style={{ width: 35, height: 40 }}
                src={`http://localhost:3000/public/img/articles/${articles.postImage}`}
                alt=""
              />
            </div>
            <div className="user-name" style={{ width: 250 }}>
              <p className="name">{articles?.title}</p>
              <p className="email" style={{ width: "250%" }}>
                {articles?.shortDescrition}
              </p>
            </div>
          </div>

          <div className="buttons">
            <button
              className="delete"
              onClick={() => {
                handleDelete(articles);
              }}
            >
              Delete Record
            </button>
            <button
              className="active"
              onClick={() => {
                handleEdit(articles);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticlesRecord;
