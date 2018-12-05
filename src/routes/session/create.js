import bcrypt from 'bcrypt'
import uuid from 'uuid/v1'
import User from '../../models/user'
import createToken from '../../utils/index'

const create = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).select('pass')
        if (user) {
            const pass = req.body.pass
            const hash = user.pass
            const match = await bcrypt.compare(pass, hash)
            const sessionId = uuid()
            if (match) {
                const payload = {
                    email: newUser.email,
                    dato: 'Empanadas de la Chacha',
                    sessionId
                }
                const token = await createToken(payload)
                await user.update({ sessionId })
                res.json({ token })
            } else {
                res.status(401).json({ message: 'Incorrect login' })
            }
        } else {
            res.status(401).json({ message: 'Incorrect login' })
        }
    } catch (err) {
        res.status(500).json({ message: `Error: ${err}` })
    }
}

export default create