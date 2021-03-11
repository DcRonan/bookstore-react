const Navbar = () => (
  <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
    <div className="container">
      <a className="navbar-brand" href="body">Bookstore CMS</a>
      <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1" type="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item" />
        </ul>
        <i className="fa fa-user-circle fa-2x ml-4" style={{ color: '#0290ff' }} />
      </div>
    </div>
  </nav>

);

export default Navbar;
