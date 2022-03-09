import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom"
const CreatePost = () => {
  const [title, setTitle] = useState(" ");
  const [postText, setPost] = useState(" ");
  //creates reference to the database
  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    //adds data to database, it takes in 2 arguements, 1 the location on the database and what you want to add
    await addDoc(postCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },

    });
    navigate("/");
  };
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input placeholder="Title..." onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
        </div>
        <button onClick = {createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
