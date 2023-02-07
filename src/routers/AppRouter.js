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
          <Route exact path="/" component={HomePages} />
          <Route exact path="/login" component={LoginPages} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/:projectId" component={ProjectPage} />
          <Route exact path="/admin/users" component={UsersPage} />

          <Route exact path="*" component={NotFoundPage} />
        </Routes>
      </Layout>
    </Router>
  );
}
