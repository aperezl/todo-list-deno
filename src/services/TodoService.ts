import TodoRepository from "../repositories/TodoRepository.ts";
import ITodo from "../entities/ITodo.ts";

class TodoService {
  constructor() {}

  readonly todoRepository = new TodoRepository();

  getTodos = async () => {
    return await this.todoRepository.find();
  };

  getTodo = async (todoId: string) => {
    return await this.todoRepository.findOne(todoId);
  };

  createTodo = async (todo: ITodo) => {
    const $oid = await this.todoRepository.insertOne(todo);
    const createdTodo = await this.getTodo($oid);
    return createdTodo;
  };

  updateTodo = async (todoId: string, completed: boolean) => {
    await this.todoRepository.updateOne(todoId, completed);
    const updatedTodo = await this.getTodo(todoId);
    return updatedTodo;
  };

  deleteTodo = async (todoId: string) => {
    const deletedTodo = await this.getTodo(todoId);
    await this.todoRepository.deleteOne(todoId);
    return deletedTodo;
  };
}

export default TodoService;
