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
      <h3>Registerted Complains</h3>
      {ComplainsRecord?.map((records) => (
        <div className="main-card">
          <div className="user-info">
            <div className="user-pic">
              <img
                style={{ width: 70, height: 70 }}
                src={
                  records.userId.profileImage == null
                    ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                    : `http://localhost:3000/public/img/profile/${records.userId.profileImage}`
                }
                alt=""
              />
            </div>
            <div className="user-name" style={{ width: 200 }}>
              <p className="name" style={{ marginTop: 5, fontSize: 14 }}>
                Name:{records?.userId.name}
              </p>
              <p className="email" style={{ marginTop: 5 }}>
                Email: {records?.userId.email}
              </p>
              <p className="name" style={{ marginTop: 5, fontSize: 14 }}>
                Phoen No: {records?.userId.phoneNo}
              </p>
              <p className="email" style={{ marginTop: 5 }}>
                Date: {new Date(records?.createdAt).toISOString().split("T")[0]}
              </p>
            </div>

            <div className="user-message">
              <p className="name" style={{ marginTop: 5, fontSize: 14 }}>
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
