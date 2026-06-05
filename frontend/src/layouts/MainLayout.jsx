import { Link } from "react-router-dom";

function MainLayout({ children }) {

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}

     <div className="w-64 border-r min-h-screen p-6">

  <h1 className="text-2xl font-bold mb-10">
    AI Platform
  </h1>

  <nav>
    <ul className="space-y-4">

      <li>
        <Link
          to="/dashboard"
          className="block p-2 rounded hover:bg-gray-100"
        >
          📊 Dashboard
        </Link>
      </li>

      <li>
        <Link
          to="/projects"
          className="block p-2 rounded hover:bg-gray-100"
        >
          📁 Projects
        </Link>
      </li>

      <li>
        <span className="block p-2 text-gray-500">
          📄 Requirements
        </span>
      </li>

      <li>
        <span className="block p-2 text-gray-500">
          ⚙ Workflow Runs
        </span>
      </li>

    </ul>
  </nav>

  <div className="mt-12">
    <button
      className="border px-4 py-2 rounded w-full"
      onClick={() => {
        localStorage.removeItem(
          "token"
        );
        window.location.href = "/";
      }}
    >
      🚪 Logout
    </button>
  </div>

</div>
      {/* Main Content */}

      <div className="flex-1 p-6">
        {children}
      </div>

    </div>
  );
}

export default MainLayout;