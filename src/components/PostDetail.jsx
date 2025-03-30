import { useLocation } from "react-router";

const PostDetail = () => {
  const post = useLocation();
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-3xl text-white my-6 font-semibold">
        {post.state.author}
      </h1>

      <h2 className="text-xl text-white my-6 font-semibold">
        {post.state.title}
      </h2>
      <p className="text-gray-600  my-6">{post.state.content}</p>
    </div>
  );
};

export default PostDetail;
