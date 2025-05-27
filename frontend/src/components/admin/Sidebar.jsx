// src/components/Admin/Sidebar.jsx
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar bg-dark p-3" id='sidebar' style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="mt-5 pt-3 text-white">Dashboard</h5>
      <h5 className='text-center py-3 w-bold text-white'>Administrateur</h5>
      <ul className="nav flex-column p-3 gap-3">
        <li className="nav-item"><Link className="nav-link text-white hover-effect" to="/admin/ventes">Ventes</Link></li>
        <li className="nav-item"><Link className="nav-link text-white hover-effect" to="/admin/utilisateurs">Utilisateurs</Link></li>
        <li className="nav-item"><Link className="nav-link text-white hover-effect" to="/admin/offres">Offres</Link></li>
        <li className="nav-item"><Link className="nav-link text-white hover-effect" to="/admin/profil">Profil</Link></li>
        <Link className="bg-danger text-center rounded-3 nav-link text-white hover-effect" to="#"
           style={{ marginTop: '230px' }}>Déconnexion</Link>
      </ul>
     

      <style>
        {`
          .hover-effect {
            transition: all 0.3s ease;
          }
          .hover-effect:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
          }
          
        `}
      </style>
    </div>
  );
}

export default Sidebar;