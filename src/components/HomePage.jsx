import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const HomePage = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    async function postFetch() {
      const postlist = await axios
        .request(import.meta.env.VITE_SERVER + "/posts")
        .then((r) => {
          console.log(r);
          setPost(r.data);
        });
    }
    postFetch();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="p-4 bg-black text-white h-screen">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>{" "}
        {posts.length != 0 ? (
          <div className="flex flex-wrap ">
            {posts.map((post, k) => {
              return (
                <div
                  key={k}
                  className="mx-12 px-8 py-2 border rounded-lg w-1/5 shadow mb-4"
                >
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.content}</p>
                  <a
                    href={`/post/${k}`}
                    className="text-blue-500"
                    onClick={() => {
                      navigate(`/post/${k}`, { state: post });
                    }}
                  >
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="animate-pulse flex flex-wrap ">
            {" "}
            <div className="mx-12 px-8 py-2 border rounded-lg w-1/4 h-36 bg-gray-800/80 shadow mb-4"></div>
            <div className="mx-12 px-8 py-2 border rounded-lg w-1/4 h-36 bg-gray-800/80 shadow mb-4"></div>{" "}
            <div className="mx-12 px-8 py-2 border rounded-lg w-1/4 h-36 bg-gray-800/80 shadow mb-4"></div>{" "}
            <div className="mx-12 px-8 py-2 border rounded-lg w-1/4 h-36 bg-gray-800/80 shadow mb-4"></div>
            <div className="mx-12 px-8 py-2 border rounded-lg w-1/4 h-36 bg-gray-800/80 shadow mb-4"></div>{" "}
            <div className="mx-12 px-8 py-2 border rounded-lg w-1/4 h-36 bg-gray-800/80 shadow mb-4"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
