import Layout from '../components/Layout';
import User from './user';
import { useRouter } from "next/router";


const Index = ({ data }) => {

    return (
        <Layout>
            <div className="jumbotron jumbotron-fluid dark justify-content-center">
                <div className="container justify-content-center">
                    {data.map(i => <User name={i.name} email={i.email} phone={i.phone} username={i.username} key={i._id} />)}
                    <User />
                </div>
            </div>
        </Layout >
    )
};

export async function getServerSideProps() {

 
    const res = await fetch(`http://localhost:4000/get/getAllData`)
    const data = await res.json()
    return { props: { data } }
}
export default Index;
