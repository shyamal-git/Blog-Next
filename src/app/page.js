"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://dummyjson.com/posts?limit=10&skip=${(page - 1) * 10}`
      );
      setPosts(res.data.posts);
      setTotalPages(Math.ceil(res.data.total / 10)); // Calculate total pages
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-2/3 md:w-1/3"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Posts List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mt-2">
              {post.body.substring(0, 100)}...
            </p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="text-lg">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
