import Layout from '../components/Layout';

const Error = ({ statusCode }) => (
    <Layout title="Error!!!">
        <p>{`Could not load your user data: status code ${statusCode}`}</p>
    </Layout>
);

export default Error;