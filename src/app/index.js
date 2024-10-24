// pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://dummyjson.com/posts?limit=10&skip=${(page - 1) * 10}`
      );
      setPosts(res.data.posts);
    };
    fetchPosts();
  }, [page]);

  const handleSearch = async () => {
    const res = await axios.get(
      `https://dummyjson.com/posts/search?q=${search}`
    );
    setPosts(res.data.posts);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Blog Posts</h1>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
