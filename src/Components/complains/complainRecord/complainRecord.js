import React, { useEffect, useState } from "react";
import "../complainRecord/complainStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ComplainsRecord() {
  const navigation = useNavigate();
  const [ComplainsRecord, setComplainsRecord] = useState([]);
  const [expandedCards, setExpandedCards] = useState([]);

  const handleExpandClick = (index) => {
    // Toggle the expanded state for the clicked card
    setExpandedCards((prevExpandedCards) => {
      const newExpandedCards = [...prevExpandedCards];
      newExpandedCards[index] = !newExpandedCards[index];
      return newExpandedCards;
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        var userData = await window.localStorage.getItem("userData");
        userData = JSON.parse(userData);

        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/complains",
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        setComplainsRecord(response.data.allComplains);
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="main-section">
      <h3>Users Complains</h3>
      {ComplainsRecord?.map((records) => (
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
                  backgroundColor: "#4A3B96",
                }}
              >
                <img
                  style={{ width: 120, height: 150 }}
                  src={
                    records.userId.profileImage == null
                      ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                      : `http://localhost:3000/public/img/profile/${records.userId.profileImage}`
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
                    {records?.userId.name}
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
                    {records?.userId.email}
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
                    {records?.userId.phoneNo}
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
                    {records?.userId.userType}
                  </p>
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#313131",
              }}
            >
              <p
                style={{
                  color: "#fff",
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
                  color: "#fff",
                }}
              >
                {records?.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComplainsRecord;
