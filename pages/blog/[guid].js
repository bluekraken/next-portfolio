import Layout from "../../components/Layout";
import styles from "../../styles/Post.module.css";
import posts from "../../data/posts";

const Post = ({ post }) => {
  return (
    <Layout title={post.title}>
      <p className={styles.post}>{post.text}</p>
    </Layout>
  );
};

export const getServerSideProps = async ({ query: { guid } }) => {
  const post = posts.filter((post) => post.guid === guid);

  return {
    props: {
      post: post[0]
    }
  };
};

export default Post;
