import bodyParser from 'body-parser'
import checkJwt from 'express-jwt'
import { handleErr, isLoggedIn } from '../../utils/index'
import options from '../../config'
import read from './read'
import create from './create'

const routesUsers = (app) => {
    app.get('/users', checkJwt({ secret: options.SECRET_KEY }), handleErr, isLoggedIn, read)
    app.post('/users', bodyParser.json(), create)
}

export default routesUsers