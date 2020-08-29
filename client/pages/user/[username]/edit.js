import Link from 'next/link';
import Layout from '../../../components/Layout';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

const Edit = ({ data }) => {

    const [dialogMsg, setDailogState] = useState(false);
    const [error, seterror] = useState('');
    const [name, setName] = useState(data.name);
    const [username, setUsername] = useState(data.username);
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);


    async function editData(data) {
        axios({
            method: 'patch',
            url: 'http://localhost:4000/update/updateData',
            data: {
                data
            }
        }).then((response) => {
            seterror(response.data.message);
            console.log(response);
            if (response.data.message == 'Data Updated') {
                Router.push('/')
            }
            setDailogState(true);
        }).catch((err) => {
            console.log(err);
        });
        setDailogState(false);
    }

    const sendData = async () => {
        if (name !== '' && username !== '' && email !== '' && phone !== '') {

            editData({
                username: data.username,
                newName: name,
                newUsername: username,
                newEmail: email,
                newPhone: phone
            });
            setDailogState(false);
        } else {
            if (name == '') {
                seterror("Name Feild Are Empty");
            }
            if (email == '') {
                seterror("Email field are empty")
            }
            if (phone == '') {
                seterror("phone field are empty")
            }
            if (username == '') {
                seterror("username field are empty")
            }
            setDailogState(true);
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="jumbotron jumbotron-fluid dark justify-content-center">
                    <div className="container justify-content-center">
                        <h1 className="display-4 justify-content-center">Edit User</h1>
                        {
                            dialogMsg === true ?
                                <div className="alert alert-danger" role="alert">{error}</div>
                                : null
                        }
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" onChange={(event) => setEmail(event.target.value)} defaultValue={data.email} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" onChange={(event) => setName(event.target.value)} defaultValue={data.name} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>username</label>
                                <input type="text" onChange={(event) => setUsername(event.target.value)} defaultValue={data.username} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" onChange={(event) => setPhone(event.target.value)} defaultValue={data.phone} className="form-control" />
                            </div>
                            <button onClick={sendData} type="button" className="btn btn-primary">Edit</button>
                            <br />
                            <br />
                            <Link href="/"><a>Back to list</a></Link>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export async function getServerSideProps({ query }) {
    const id = await query;
    const res = await fetch('http://localhost:4000/post/findData', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ username: id.username })
    });
    const data = await res.json();
    return { props: { data } }


}
export default Edit;