import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import man from "./man.png";
const UserProfile = () => {
  const loc = useLocation();
  const [posts, setPost] = useState({});
  useEffect(() => {
    async function userPost() {
      await axios
        .get(import.meta.env.VITE_SERVER + `/user/${loc.state.username}`)
        .then((r) => {
          console.log(r);
          setPost(r.data);
        });
    }
    userPost();
  }, [loc.state.username]);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-black text-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4 border-b pb-4 mb-4">
        <img
          src={man}
          alt="User Avatar"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-semibold">{loc.state.username}</h2>
          <p className="text-gray-600">{loc.state.email}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">User Posts</h3>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-sm">
              <h4 className="text-lg font-medium">{post.title}</h4>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
