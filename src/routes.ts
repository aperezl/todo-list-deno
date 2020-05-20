import { Router } from 'https://deno.land/x/oak/mod.ts'
import {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
 } from './controllers/TodoController.ts'

const router = new Router()

router
  .get('/todos', getTodos)
  .post('/todos', createTodo)
  .get('/todos/:todoId', getTodo)
  .put('/todos/:todoId', updateTodo)
  .delete('/todos/:todoId', deleteTodo)

export default router
