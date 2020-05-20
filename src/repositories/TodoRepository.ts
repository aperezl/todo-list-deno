import db from '../db/mongodb.ts'
import ITodo from '../entities/ITodo.ts'

class TodoRepository {
  
  constructor() {}
  
  readonly todoCollection = db.collection('todos')

  async find() {
    const todos = await this.todoCollection.find({})
    return todos
  }

  async findOne(todoId:string) {
    const todo = await this.todoCollection.findOne({_id: {$oid: todoId}})
    return todo
  }

  async insertOne(todo: ITodo) {
    const { $oid } = await this.todoCollection.insertOne(todo)
    return $oid
  }

  async updateOne(todoId:string, completed:boolean) {
    const updatedTodo = await this.todoCollection.updateOne({_id: {$oid: todoId}}, { $set: { completed } })
    return updatedTodo
  }

  async deleteOne(todoId:string) {
    await this.todoCollection.deleteOne({_id: {$oid: todoId}})
  }
}

export default TodoRepository