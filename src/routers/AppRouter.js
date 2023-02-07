import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import AccountPage from "../Pages/AccountPage";
import UsersPage from "../Pages/admin/UsersPage";
import HomePages from "../Pages/HomePages";
import LoginPages from "../Pages/LoginPages";
import NotFoundPage from "../Pages/NotFoundPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectsPage from "../Pages/ProjectsPage";
import RegisterPage from "../Pages/RegisterPage";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route exact path="/login" element={<LoginPages />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/projects/:projectId" element={<ProjectPage />} />
          <Route exact path="/admin/users" element={<UsersPage />} />

          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
