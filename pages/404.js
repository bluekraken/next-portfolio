// import Image from "next/image";
import Layout from "../components/Layout";

const Error = ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      <p>
        {statusCode
          ? `I could not load your user data (Status Code: ${statusCode})!`
          : "Sorry, but I could not find that page!"}
      </p>
    </Layout>
  );
};

export default Error;
