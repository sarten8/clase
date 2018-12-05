import routesUsers from './user/index'
import routesSessions from './session/index'

const routes = (app) => {
    routesUsers(app)
    routesSessions(app)
}

export default routes