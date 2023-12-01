import './Navbar.css'

export default function Nav({ links }) {
    return (
      <nav id="navbar" >
            <h1>Caroline Hartwell</h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id= "nav-ul">
              {links.map((link) => link )}
            </ul>
      </nav>
    );
  }