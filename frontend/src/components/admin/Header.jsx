function Header() {
  const toggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="/images/DB_Africa.jpeg" alt="" />
            <span className="d-none d-lg-block">DB Africa</span>
          </a>
          <i
            className="bi bi-list toggle-sidebar-btn"
            role="button"
            title="Afficher le menu"
            id="toggle-sidebar"
            onClick={toggleSidebar}
          />
        </div>

        {/* End Logo */}
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>

        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/images/DB_Africa.jpeg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  M. Seck
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Mourtada Seck</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person" />
                    <span>Mon Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span>Déconnexion</span>
                  </a>
                </li>
              </ul>
            </li>
            <button className="btn btn-primary mx-3">créer compte</button>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
