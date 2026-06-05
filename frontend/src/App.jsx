import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/projects"
  element={
    <ProtectedRoute>
      <ProjectPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/projects/:id"
  element={
    <ProtectedRoute>
      <ProjectDetailsPage />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;