
import bodyParser from 'body-parser'
import checkJwt from 'express-jwt'
import options from '../../config'
import { handleErr, isLoggedIn } from '../../utils/index'
import read from './read'
import create from './create'
import deleteSession from './delete'

const routesSessions = (app) => {
    app.get('/sessions', checkJwt({ secret: options.SECRET_KEY }), handleErr, isLoggedIn, read)
    app.post('/sessions', bodyParser.json(), create)
    app.delete('/sessions', checkJwt({ secret: options.SECRET_KEY }), handleErr, isLoggedIn, deleteSession)
}

export default routesSessions