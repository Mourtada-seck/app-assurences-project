// src/layouts/AdminLayout.jsx
import Header from '../admin/Header';
import Sidebar from '../admin/Sidebar';

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="p-4" style={{ flexGrow: 1 }}>{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
