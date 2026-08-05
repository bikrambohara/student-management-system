import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="bg-slate-100">

      <Sidebar />

      <div className="ml-58 flex min-h-screen flex-col">

        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;