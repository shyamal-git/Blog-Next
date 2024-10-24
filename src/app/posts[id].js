// pages/posts/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
      };
      const fetchComments = async () => {
        const res = await fetch(`https://dummyjson.com/posts/${id}/comments`);
        const data = await res.json();
        setComments(data.comments);
      };
      fetchPost();
      fetchComments();
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.body} />
      </Head>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <h2 className="text-2xl mt-4">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="border-b py-2">
            <p>
              <strong>{comment.user.username}</strong>: {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
