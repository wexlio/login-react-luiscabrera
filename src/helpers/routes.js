const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    projects: '/projects',
    project: (projecId) => (projecId ? `/projects/:${projecId}` : "/projects/:projectId"),
    admin: {
        users: '/admin/users'
    }
}

export default routes