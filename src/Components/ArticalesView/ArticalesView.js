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
          width: "99%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Articles Mangements</h3>
        <button
          style={{
            width: "10%",
            backgroundColor: "green",
            height: 40,
            marginTop: 10,
          }}
          onClick={() => {
            handleAdd("");
          }}
        >
          Add
        </button>
      </div>
      {ArticlesRecord?.map((articles) => (
        <div
          style={{
            backgroundColor: "#313131",
            width: "100%",
            flex: 0.2,
            padding: 10,
          }}
        >
          <div style={{ height: "100%", width: "100%", display: "flex" }}>
            <div
              style={{
                height: 120,
                width: 100,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4A3B96",
              }}
            >
              <img
                style={{ width: 100, height: 120 }}
                src={`http://localhost:3000/public/img/articles/${articles.postImage}`}
                alt=""
              />
            </div>
            <div
              style={{
                height: "80%",
                width: "80%",
                padding: 20,
              }}
            >
              <p
                style={{
                  color: "#fff",
                  marginTop: 5,
                  fontSize: 15,
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                Article Title:{" "}
                <p
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {articles?.title}
                </p>
              </p>
              <p
                style={{
                  marginTop: 5,
                  color: "#fff",
                  fontSize: 15,
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                Descrition:{" "}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {articles?.shortDescrition}
                </p>
              </p>
            </div>
            <div
              className="buttons"
              style={{
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="delete"
                style={{ height: 50, backgroundColor: "red", color: "#fff" }}
                onClick={() => {
                  handleDelete(articles);
                }}
              >
                Delete Record
              </button>
              <button
                className="active"
                style={{
                  height: 50,
                  backgroundColor: "#4A3B96",
                  color: "#fff",
                }}
                onClick={() => {
                  handleEdit(articles);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticlesRecord;
