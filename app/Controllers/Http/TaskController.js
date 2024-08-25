'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index({ auth, response }) {
    const user = await auth.getUser()
    const tasks = await Task.query().where('user_id', user.id).fetch()
    return response.json(tasks)
  }

  async store({ request, auth, response }) {
    const user = await auth.getUser()
    const { title, description, status, priority } = request.only(['title', 'description', 'status', 'priority'])

    const task = new Task()
    task.title = title
    task.description = description
    task.status = status
    task.priority = priority
    task.user_id = user.id

    await task.save()
    return response.status(201).json(task)
  }

  async update({ params, request, auth, response }) {
    const user = await auth.getUser()
    const task = await Task.query().where('id', params.id).where('user_id', user.id).first()

    if (!task) {
      return response.status(404).json({ message: 'Task not found' })
    }

    const { title, description, status, priority } = request.only(['title', 'description', 'status', 'priority'])

    task.title = title || task.title
    task.description = description || task.description
    task.status = status || task.status
    task.priority = priority || task.priority

    await task.save()
    return response.json(task)
  }

  async destroy({ params, auth, response }) {
    const user = await auth.getUser()
    const task = await Task.query().where('id', params.id).where('user_id', user.id).first()

    if (!task) {
      return response.status(404).json({ message: 'Task not found' })
    }

    await task.delete()
    return response.status(204).json(null)
  }
}

module.exports = TaskController
