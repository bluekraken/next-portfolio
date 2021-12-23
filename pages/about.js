import Image from "next/image";
import Layout from "../components/Layout";
import ErrorPage from "./404";

const About = ({ user, statusCode }) => {
  if (statusCode) {
    return <ErrorPage statusCode={statusCode} />;
  }

  return (
    <Layout title="About">
      <p>{user.name}</p>
      <p>A javascript programmer</p>
      <Image src={user.avatar_url} alt="My avatar" width="260" height="260" />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/users/bluekraken");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();

  return {
    props: { user: data, statusCode }
  };
};

export default About;
