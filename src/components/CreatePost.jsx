import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
const CreatePost = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const cred = useLocation();
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cred);
    const pos = {
      title: post.title,
      content: post.content,
      author: cred.state.username,
    };
    console.log(pos);
    await axios
      .post(import.meta.env.VITE_SERVER + "/post", {
        headers: { "Content-Type": "application/json" },
        data: pos,
      })
      .then((r) => {
        console.log(r);
        navigate("/");
      });
    console.log("Post Created:", post);
  };

  return (
    <div className="h-screen">
      <div className="max-w-lg text-white  mx-auto mt-10 p-6 border rounded-lg shadow">
        <h2 className="text-xl text-white font-semibold">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <textarea
            name="content"
            placeholder="Write your post here..."
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
