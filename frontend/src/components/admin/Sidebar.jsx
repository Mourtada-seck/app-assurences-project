// src/components/Admin/Sidebar.jsx
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-light p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="mb-4">Dashboard</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link" to="/admin">Administrateur</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/admin/ventes">Ventes</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/admin/utilisateurs">Utilisateurs</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/admin/offres">Offres</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/admin/profil">Profil</Link></li>
        <li className="nav-item"><Link className="nav-link text-danger" to="/logout">Déconnexion</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
