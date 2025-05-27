// src/layouts/UserLayout.jsx
import Header from '../user/Header';
import Sidebar from '../user/Sidebar';
import Content from '../user/Content';

function UserLayout({ children }) {
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

export default UserLayout;
