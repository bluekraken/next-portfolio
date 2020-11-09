import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const MyBlog = () => (
    <Layout title="My blog">
        <ul>
            <PostLink slug="react-post" title="React" />
            <PostLink slug="next-post" title="Next" />
            <PostLink slug="graphql-post" title="GraphQL" />
        </ul>
    </Layout>
);

export default MyBlog;