import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="lg:ml-64">
        <Header />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;