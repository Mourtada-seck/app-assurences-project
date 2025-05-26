function Sidebar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item p-3">
            <h5 className="text-center pb-4">DB Africa</h5>
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-heading">PRODUCTION</li>
          <li className="nav-item p-2">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-briefcase-fill"></i>
              <span>Nouvelle affaire</span>
            </a>
          </li>
          {/* End Profile Page Nav */}
          <li className="nav-item p-2">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-pencil-fill"></i>
              <span>Avenant</span>
            </a>
          </li>
          {/* End F.A.Q Page Nav */}
          <li className="nav-item p-2">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-file-ppt"></i>
              <span>Production</span>
            </a>
          </li>
          {/* End Contact Page Nav */}
          <li className="nav-item p-2">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-person-arms-up"></i>
              <span>Cotisation</span>
            </a>
          </li>
          {/* End Register Page Nav */}
          <li className="nav-heading">REPORTING</li>
          <li className="nav-item p-2">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-card-list" />
              <span>Edition production</span>
            </a>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  );
}
export default Sidebar;
