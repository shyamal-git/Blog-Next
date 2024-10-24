// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// const PostPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [post, setPost] = useState(null);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchPost = async () => {
//       if (id) {
//         const res = await axios.get(`https://dummyjson.com/posts/${id}`);
//         setPost(res.data);
//       }
//     };

//     const fetchComments = async () => {
//       if (id) {
//         const res = await axios.get(
//           `https://dummyjson.com/posts/${id}/comments`
//         );
//         setComments(res.data.comments);
//       }
//     };

//     fetchPost();
//     fetchComments();
//   }, [id]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//       <p className="text-gray-600 mb-4">{post.body}</p>
//       <h2 className="text-2xl font-semibold mt-6">Comments</h2>
//       <ul className="mt-4">
//         {comments.map((comment) => (
//           <li
//             key={comment.id}
//             className="border border-gray-200 rounded-lg p-4 mt-2"
//           >
//             <strong>{comment.user.fullName}</strong>
//             <p>{comment.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostPage;
