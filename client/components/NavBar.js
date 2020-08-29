import Link from 'next/link';

const NavBar = () => (

    <nav className="navbar navbar-dark bg-dark">
        <div className="container justify-content-center">
            <ul className="nav justify-content-center">
                <li className="nav-item justify-content-center">
                    <Link href="/"><a className="nav-link" >List Of Users</a></Link>
                </li>
                <li className="nav-item justify-content-center">
                    <Link href="/add"><a className="nav-link" >Add New User</a></Link>
                </li>

            </ul>
        </div>
    </nav>


);

export default NavBar;
