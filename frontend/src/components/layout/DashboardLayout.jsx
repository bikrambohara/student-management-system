// import Sidebar from "./Sidebar";
// import Header from "./Header";

// function DashboardLayout({ children }) {
//   return (
//     <div>
//       <Sidebar />
//       <Header />
//     </div>
//   );
// }

// export default DashboardLayout;



import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;