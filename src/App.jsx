import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AuthForm from "./components/AuthForm";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";
import { useState } from "react";
import RegisterForm from "./components/Register";
import Search from "./components/Search";
import ProfilePage from "./components/UserProfile";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);
  const [isSearch, search] = useState(false);
  const [q, setQ] = useState("");
  return (
    <Router>
      <div className="h-screen bg-black">
        <Navbar cred={user} setQ={setQ} search={search} />
        {isSearch ? <Search q={q} search={search} /> : <></>}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<AuthForm type="login" setcred={setUser} />}
          />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/register" element={<AuthForm type="register" />} />
          <Route path="/create" element={<CreatePost cred={user} />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
