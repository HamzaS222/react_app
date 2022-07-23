import React from 'react'

export default function Header() {
return (
  <nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Contact Manager</a>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
)
}
