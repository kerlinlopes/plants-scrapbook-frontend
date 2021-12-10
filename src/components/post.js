import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return (
    <div className="cards">
        <div className="card">
      <Link to={`/post/${post.id}`}>
        <h1 className="name">{post.name}</h1>
      </Link>
      {/* <h2 className="description">{post.description}</h2> */}
      <img src={post?.image} alt="" className="image"></img>
      </div>
    </div>
  );
};

export default Post;


