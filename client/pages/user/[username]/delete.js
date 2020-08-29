import Link from 'next/link';
import Layout from '../../../components/Layout';
import { useState } from 'react';
import axios from 'axios';
import Router,{ useRouter } from 'next/router';

const Delete = ({data}) => {

    const id = 1;
    const [dialogMsg, setDailogState] = useState(false);
    const [error, seterror] = useState('');
    const [username, setusername] = useState(data.username);
    console.log(username);

    async function postDeleteData(data) {
        axios({
            method: 'delete',
            url: 'http://localhost:4000/delete/delData',
            data: {
                data
            }
        }).then(function (response) {
            seterror(response.data.message);
            console.log(response);
            setDailogState(true);
            if(response.data.message == 'Data Deleted') {
                Router.push('/');
            }
        }).catch(function (error) {
            console.log(error);
        });
        setDailogState(false);
    }
    async function deleteData() {

        if (username !== '') {
            postDeleteData({ username: username });
            setDailogState(false);
        } else {
            seterror("data not delete");
            setDailogState(true);
        }
    }
    return (
        <Layout>
            <div className="container">
                <div className="jumbotron jumbotron-fluid dark justify-content-center">
                    <div className="container justify-content-center">
                        {
                            dialogMsg === true ?
                                <div className="alert alert-danger" role="alert">{error}</div>
                                : null
                        }
                        <h1 className="display-4 justify-content-center">Are You Sure?</h1>
                        <button onClick={deleteData} type="button" className="btn btn-primary">Yes</button>
                        <br />
                        <br />
                        <Link href="/"><button type="button" className="btn btn-primary">No</button></Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export async function getServerSideProps({ query }) {
    const data = await query;

    return {props : {data}}
}

export default Delete;