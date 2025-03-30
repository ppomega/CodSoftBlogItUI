import { useNavigate } from "react-router";
const Navbar = ({ cred, search, setQ }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black sticky top-0 p-4 z-20 text-white flex justify-between">
      <h1 className="text-xl font-semibold">Blog</h1>
      <div>
        <input
          onFocus={(e) => {
            e.stopPropagation();
            search(true);
          }}
          onInput={(e) => {
            setQ(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="w-1/3 h-8 px-2 py-4 rounded-md  bg-gray-500/20"
        />
        <a
          className="px-4"
          onClick={() => {
            search(false);

            navigate("/", { state: cred });
          }}
        >
          Home
        </a>

        <a
          onClick={() => {
            search(false);

            navigate("/create", { state: cred });
          }}
          className="px-4"
        >
          New Post
        </a>
        {cred != null ? (
          <></>
        ) : (
          <>
            <a
              href="/login"
              onClick={() => {
                search(false);
              }}
              className="px-4"
            >
              Login
            </a>
            <a
              href="/register"
              onClick={() => {
                search(false);
              }}
              className="px-4"
            >
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
