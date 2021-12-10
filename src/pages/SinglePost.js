import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts, edit, deletePlant }) => {
  // get the params from the url
  const params = useParams();
  const id = parseInt(params.id);

  // find the particular post the user wants to see based on the param
  const post = posts.find((p) => p.id === id);
  console.log(post);

  return (
    <div>
      <h1 className="p-name">{post?.name}</h1>
      <br />
      <div className="card-description">
        <h1 className="p-description">{post?.description}</h1>
      </div>
      <br />
      <br />
      <img src={post?.image} alt="" className="p-image"></img>
      <br />
      <br />
      <button onClick={() => deletePlant(post)} className="delete-button">Delete</button>
      <button onClick={() => edit(post)} className="edit-button">Edit</button>
      <Link to="/">
        <button className="go-back">Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;
