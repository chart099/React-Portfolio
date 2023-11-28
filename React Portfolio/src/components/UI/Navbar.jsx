export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary" style={{ width: '100%'}}>
        <div style={{border: '1px solid red'}}>
          <div id="navbarSupportedContent">
            <h1>Caroline Hartwell</h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }