import Link from 'next/link';

const User = (props) => {
    return (
        <div className="card">
            <div className="card-header">{props.username}</div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h5 className="card-title">{props.email}</h5>
                <h5 className="card-title">{props.phone}</h5>
                <Link href="user/[username]/edit" as={`/user/${props.username}/edit`}><a className="btn btn-primary">Edit</a></Link>
                <br />
                <br />
                <Link href="user/[username]/delete" as={`/user/${props.username}/delete`}><a className="btn btn-primary">Delete</a></Link>
            </div>
        </div>
    )
};

export default User;