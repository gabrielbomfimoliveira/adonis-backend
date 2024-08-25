'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('register', 'AuthController.register')
Route.post('login', 'AuthController.login')
Route.get('me', 'AuthController.me').middleware('auth')
Route.put('me', 'AuthController.update').middleware('auth')
Route.post('logout', 'AuthController.logout').middleware('auth')
Route.resource('tasks', 'TaskController').apiOnly().middleware(['auth'])
