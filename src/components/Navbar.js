import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom"

export default function Navbar(props){
    return(
        <div>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" cref="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="TextForm2">Text Forms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="navbarroute">NavRoute</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" cref="#">Contact</a>
        </li>

      </ul>
      <form className="d-flex" role="search">
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
</div>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
Navbar.pro1psTypes={p2:PropTypes.String}
