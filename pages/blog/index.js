import Link from "next/link";
import Layout from "../../components/Layout";
import posts from "../../data/posts";

const Blog = () => {
  return (
    <Layout title="Blog">
      <ul>
        {posts.map((post) => (
          <li key={post.guid}>
            <Link href={`/blog/${post.guid}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
