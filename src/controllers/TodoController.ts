import TodoService from '../services/TodoService.ts'
import ITodo from '../entities/ITodo.ts'
import { RouterContext } from '../deps.ts'

const todoService = new TodoService()

export const getTodos = async (context: RouterContext) => {
  context.response.body = await todoService.getTodos()
}

export const getTodo = async (context: RouterContext) => {
  const { params } = context
  
  context.response.body = await todoService.getTodo(params.todoId as string)
}

export const createTodo = async (context: RouterContext) => {
  
  const { request, response } = context
  if(!request.hasBody) {
    response.status = 400
    response.body = { error: 'Invalid body format' }
    return
  }

  const body = await request.body()
  if (!body.value.name) {
    response.status = 400
    response.body = { error: 'Field name is mandatory' }
    return
  }

  const newTodo:ITodo = {
    name: body.value.name,
    completed: false,
    created_at: new Date()
  }

  const todo = await todoService.createTodo(newTodo)
  response.body = todo
}

export const updateTodo = async (context: RouterContext) => {
  
  const { request, response } = context
  if(!request.hasBody) {
    response.status = 400
    response.body = { error: 'Invalid body format' }
    return
  }

  const body = await request.body()

  const { params } = context

  const todo = await todoService.updateTodo(params.todoId as string, body.value.completed as boolean)
  response.body = todo

}

export const deleteTodo = async (context: RouterContext) => {

  const { response, params } = context
  const todo = await todoService.deleteTodo(params.todoId as string)
  response.body = todo
}