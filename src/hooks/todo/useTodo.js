import { useEffect, useState, useCallback } from "react";
import TodoService from "../../services/todo.service";

const useTodo = () => {
  const [localTodos, setLocalTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);
    const loadedTodos = await TodoService.getTodos();
    setLocalTodos(() => [...loadedTodos]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { localTodos, isLoading, fetchTodos };
};

export default useTodo;
