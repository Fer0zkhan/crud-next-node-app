import Navbar from './NavBar';
import Head from 'next/head';


const Layout = (props) => (
    <div>
        <Head>
            <title>CRUD APP</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        </Head>
        <Navbar />
        {props.children}
      
    </div>
);

export default Layout;