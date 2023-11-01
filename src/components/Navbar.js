import React from 'react'
import { Link, To } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand px-3" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mx-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link " to="/About">About</Link>
                            </li>
                        </ul>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" ></input>
                        <label className="form-check-label" for="flexSwitchCheckChecked">{props.mode} mode</label>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;