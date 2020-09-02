import Layout from '../components/Layout';
import { useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';


const Add = () => {

    const [dialogMsg, setDailogState] = useState(false);
    const [error, seterror] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    async function postData(data) {
        axios({
            method: 'post',
            url: 'http://localhost:4000/post/postData',
            data: {
                data
            }
        }).then((response) => {
            seterror(response.data.message);
            console.log(response);
            setDailogState(true);
            if (response.data.message == 'Data Save') {
                Router.push('/');
            }
            clearData();
        }).catch((error) => {
            console.log(error);
        });
        setDailogState(false);
    }

    const clearData = async () => {
        setName('');
        setUsername('');
        setEmail('');
        setPhone('');
    }

    const sendData = async () => {

        if (name !== '' && username !== '' && email !== '' && phone !== '') {
            postData({
                name: name,
                username: username,
                email: email,
                phone: phone
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
                        <h1 className="display-4 justify-content-center">Add New User</h1>
                        {
                            dialogMsg === true ?
                                <div className="alert alert-danger" role="alert">{error}</div>
                                : null
                        }
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" onChange={(event) => setName(event.target.value)} value={name} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>username</label>
                                <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" onChange={(event) => setPhone(event.target.value)} value={phone} className="form-control" />
                            </div>

                            <button onClick={sendData} type="button" className="btn btn-primary">Add</button>
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


export default Add;