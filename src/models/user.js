import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'
import config from '../config'

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true, required: [true, 'e-mail required'], validate: validator.isEmail },
    pass: { type: String, select: false, required: [true, 'Password required'], },
	sessionId: { type: String }
})

UserSchema.pre('save', async function (next) {
	const user = this
	try {
		const hash = await bcrypt.hash(user.pass, config.saltRounds);
		user.pass = hash
		next()
	} catch(err) {
		return err
	}	
})

export default mongoose.model('User', UserSchema)