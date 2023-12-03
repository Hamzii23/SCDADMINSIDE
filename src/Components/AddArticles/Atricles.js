import React, { useEffect, useState } from "react";
import "../AddArticles/articalesStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Articles() {
  const naviation = useNavigate();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDesccriptipn] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [details, setDetails] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const articalesData = window.localStorage.getItem("articales");
    const parsedData = JSON.parse(articalesData);
    console.log(parsedData);

    setTitle(parsedData.title);
    setShortDesccriptipn(parsedData.shortDescrition);
    setDetails(parsedData.details);
    setId(parsedData._id);
  }, []);
  ///////////////////////////////////////
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(imageUrl, shortDescription, title, details);
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);

    const formData = new FormData();
    formData.append("photo", imageUrl);
    formData.append("title", title);
    formData.append("shortDescrition", shortDescription);
    formData.append("details", details);

    const response = await axios.post(
      `http://localhost:3000/api/v1/admin/newArticales`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    if (response.error) {
      alert("NetWork Problem");
    }
    alert("Record Added");
    naviation("/ArticlesRecord");
  };
  /////////////////////////////////////////
  const handleEdit = async (e) => {
    e.preventDefault();
    console.log(id);
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);

    const formData = new FormData();
    formData.append("photo", imageUrl);
    formData.append("title", title);
    formData.append("shortDescrition", shortDescription);
    formData.append("details", details);

    const response = await axios.patch(
      `http://localhost:3000/api/v1/admin/updateArticales/${id}`,
      formData,
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
    naviation("/ArticlesRecord");
  };

  return (
    <div className="main-bg">
      <form className="article-form">
        <div>
          <label htmlFor="title">Enter Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="short-description">Enter Short Description:</label>
          <textarea
            id="short-description"
            name="short-description"
            rows="4"
            required
            value={shortDescription}
            onChange={(e) => setShortDesccriptipn(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Post Image:</label>
          <input
            type="file"
            id="image"
            name="file"
            // accept="image/*"
            onChange={(e) => setImageUrl(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="detailed-description">
            Enter Detailed Description:
          </label>
          <textarea
            id="detailed-description"
            name="detailed-description"
            rows="6"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <div style={{ flexDirection: "row" }}>
          <button type="submit" style={{ width: 200 }} onClick={handleEdit}>
            Edit Save
          </button>
          <button
            type="submit"
            onClick={submitHandler}
            style={{ width: 200, backgroundColor: "green", marginLeft: 20 }}
          >
            Save New
          </button>
        </div>
      </form>
    </div>
  );
}
export default Articles;
