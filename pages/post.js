import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Viverra nam libero justo laoreet sit. Mauris in aliquam sem fringilla ut morbi tincidunt. At erat pellentesque adipiscing commodo elit. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Rhoncus dolor purus non enim. Malesuada bibendum arcu vitae elementum curabitur vitae. Gravida quis blandit turpis cursus. Vivamus at augue eget arcu dictum varius duis at. Scelerisque viverra mauris in aliquam sem fringilla. Vitae justo eget magna fermentum iaculis eu non diam phasellus.</p>
    </Layout>
);

export default withRouter(Post);