import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">FilmyGyan</Link>
                <form className="form-inline">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
