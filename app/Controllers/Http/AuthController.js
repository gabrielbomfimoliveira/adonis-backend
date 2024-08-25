'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
const Validator = use('Validator')

class AuthController {
  async register({ request, response }) {
    const rules = {
      username: 'required|unique:users,username',
      email: 'required|email|unique:users,email',
      password: 'required|min:6'
    }

    const validation = await Validator.validate(request.all(), rules)

    if (validation.fails()) {
      return response.status(400).json(validation.messages())
    }

    const { username, email, password } = request.only(['username', 'email', 'password'])

    const user = await User.create({ username, email, password })

    return response.status(201).json({ message: 'User created', user })
  }

  async login({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    try {
      // Gera o token JWT
      const token = await auth.withRefreshToken().attempt(email, password)
      return response.json(token)
    } catch (error) {
      return response.status(401).json({ message: 'Invalid credentials', error: error.message })
    }
  }

  async me({ auth, response }) {
    try {
      const user = await auth.getUser()
      return response.json(user)
    } catch {
      return response.status(401).json({ message: 'Unauthorized' })
    }
  }

  async update({ request, auth, response }) {
    const user = await auth.getUser();
    const { email, password } = request.only(['email', 'password']);
    
    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = await Hash.make(password);
    }

    await user.save();

    return response.json({ message: 'User updated successfully' });
  }

  async logout({ auth, response }) {
    await auth.logout()
    return response.json({ message: 'Logged out successfully' })
  }
}

module.exports = AuthController
