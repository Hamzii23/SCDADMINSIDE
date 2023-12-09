import React, { useEffect, useState } from "react";
import "../UserFeedBack/feedbackStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FeedBackRecord() {
  const navigation = useNavigate();
  const [FeedBackRecord, setFeedBackRecord] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var userData = await window.localStorage.getItem("userData");
        userData = JSON.parse(userData);

        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/allFeedBack",
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        setFeedBackRecord(response.data.allFeedBack);
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(FeedBackRecord);
  return (
    <div className="main-section">
      <h3>Users FeedBacks After Meetings</h3>
      {FeedBackRecord?.map((records) => (
        <div
          style={{
            backgroundColor: "#313131",
            width: "100%",
            flex: 1,
            padding: 10,
          }}
        >
          <div style={{ height: "100%", width: "100%", display: "flex" }}>
            <div
              style={{
                height: "100%",
                width: "50%",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div
                style={{
                  height: 150,
                  width: 120,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#313131",
                }}
              >
                <img
                  style={{ width: 120, height: 150 }}
                  src={
                    records.complainFrom.profileImage == null
                      ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                      : `http://localhost:3000/public/img/profile/${records.complainFrom.profileImage}`
                  }
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "80%",
                  width: "100%",
                  padding: 10,
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
                  Name:{" "}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainFrom.name}
                  </p>
                </p>
                <p
                  style={{
                    color: "#fff",
                    marginTop: 5,
                    fontSize: 15,
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  Email:{" "}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainFrom.email}
                  </p>
                </p>
                <p
                  style={{
                    color: "#fff",
                    marginTop: 5,
                    fontSize: 15,
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  Phone No:
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainFrom.phoneNo}
                  </p>
                </p>
                <p
                  style={{
                    color: "#fff",
                    marginTop: 5,
                    fontSize: 15,
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  UserType:{" "}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainFrom.userType}
                  </p>
                </p>
              </div>
            </div>
            <div
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "#cccccccc",
                marginRight: "5%",
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Message From User
              </p>
              <p
                className="name"
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  textAlign: "justify",
                  padding: 5,
                }}
              >
                {records?.comments}
              </p>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div
                style={{
                  height: "80%",
                  width: "100%",
                  padding: 10,
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
                  Name:{" "}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainTo.name}
                  </p>
                </p>
                <p
                  style={{
                    color: "#fff",
                    marginTop: 5,
                    fontSize: 15,
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  Email:{" "}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainTo.email}
                  </p>
                </p>
                <p
                  style={{
                    color: "#fff",
                    marginTop: 5,
                    fontSize: 15,
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  Phone No:
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainTo.phoneNo}
                  </p>
                </p>
                <p
                  style={{
                    color: "#fff",
                    marginTop: 5,
                    fontSize: 15,
                    display: "flex",
                    fontWeight: "bold",
                  }}
                >
                  UserType:{" "}
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: "normal",
                    }}
                  >
                    {records?.complainTo.userType}
                  </p>
                </p>
              </div>
              <div
                style={{
                  height: 150,
                  width: 120,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#313131",
                }}
              >
                <img
                  style={{ width: 120, height: 150 }}
                  src={
                    records.complainTo.profileImage == null
                      ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                      : `http://localhost:3000/public/img/profile/${records.complainTo.profileImage}`
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedBackRecord;
