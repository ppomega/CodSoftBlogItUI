import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const AuthForm = ({ type, setcred }) => {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username: formData.username, email: formData.email };
    console.log(user);
    await axios
      .post(import.meta.env.VITE_SERVER + "/user/auth", {
        headers: { "Content-Type": "application/json" },
        data: user,
      })
      .then((r) => {
        console.log(r);
        if (r.data == true) {
          setcred(user);
          navigate("/");
        } else {
          navigate("/login");
        }
      });
    console.log(`${type} form submitted:`, formData);
  };

  return (
    <div className="max-w-md bg-black h-1/2 text-white mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-semibold">
        {type === "login" ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="username"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-4 border rounded-md"
        />
        <input
          type="password"
          name="email"
          placeholder="Password/Email"
          onChange={handleChange}
          className="w-full p-4 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500   text-white py-2  my-4 rounded-sm"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
