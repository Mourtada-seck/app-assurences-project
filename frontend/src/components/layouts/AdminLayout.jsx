// src/layouts/AdminLayout.jsx
import Header from '../admin/Header';
import Sidebar from '../admin/Sidebar';
import Content from '../admin/Content';

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="p-4" style={{ flexGrow: 1 }}>{children}
          <Content />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
