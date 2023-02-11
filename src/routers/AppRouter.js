import { Container } from "@mui/system";
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
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import roles from '../helpers/roles'
import routes from '../helpers/routes'

export default function AppRouter() {
  return (
    <Router>
      <Layout>
      <Container>
        <Routes>
          <Route exact path={routes.home} element={<HomePages />} />
          <Route exact path={routes.login} element={<PublicRoute />}>
            <Route exact path={routes.login} element={<LoginPages />} />
          </Route>
          <Route exact path={routes.register} element={<PublicRoute />}>
            <Route exact path={routes.register} element={<RegisterPage />} />
          </Route>
          {/* <Route exact path="/login" element={<LoginPages />} />
          <Route exact path="/register" element={<RegisterPage />} /> */}
          <Route exact path={routes.account} element={<PrivateRoute />}>
            <Route exact path={routes.account} element={<AccountPage />} />
          </Route>
          <Route exact path={routes.projects} element={<PrivateRoute />}>
            <Route exact path={routes.projects} element={<ProjectsPage />} />
          </Route>
          <Route exact path={routes.project()} element={<PrivateRoute />}>
            <Route
              exact
              path={routes.project()}
              element={<ProjectPage />}
            />
          </Route>
          <Route exact path={routes.admin.users} element={<PrivateRoute hasRole={roles.admin}/>}>
            <Route exact path={routes.admin.users} element={<UsersPage />} />
          </Route>
          {/* <PrivateRoute exact path="/account" element={<AccountPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/projects/:projectId" element={<ProjectPage />} />
          <Route exact path="/admin/users" element={<UsersPage />} /> */}

          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
    </Container>
      </Layout>
    </Router>
  );
}
