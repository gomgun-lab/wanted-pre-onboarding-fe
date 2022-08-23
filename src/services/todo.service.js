import { RequestService } from "./request.service";

export class TodoService extends RequestService {
  async createTodo(todo) {
    const data = await this.postRequest("/todos", { todo });
    return this.returnData(data);
  }

  async getTodos() {
    const data = await this.getRequest("/todos");
    return this.returnData(data);
  }

  async updateTodo(id, todo, isCompleted) {
    const data = await this.updateRequest(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return this.returnData(data);
  }

  async deleteTodo(id) {
    const data = await this.deleteRequest(`/todos/${id}`);
    return this.returnData(data);
  }
}

export default new TodoService();
