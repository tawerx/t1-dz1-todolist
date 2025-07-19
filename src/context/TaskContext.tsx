import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from "../types";

interface TasksContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

const tasksArray: Task[] = [
  {
    id: 1,
    title: "Пофиксить баг с авторизацией",
    description: "Пользователь не может войти после обновления токена.",
    category: "Bug",
    status: "To Do",
    priority: "High",
  },
  {
    id: 2,
    title: "Добавить возможность фильтрации задач",
    description: "Фильтрация по статусу, категории, приоритету.",
    category: "Feature",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Обновить README",
    description: "Добавить инструкции по запуску проекта.",
    category: "Documentation",
    status: "Done",
    priority: "Low",
  },
  {
    id: 4,
    title: "Рефакторинг TaskItem",
    description: "Вынести теги и кнопки в отдельный компонент.",
    category: "Refactor",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Написать юнит-тесты для TaskForm",
    description: "Использовать React Testing Library.",
    category: "Test",
    status: "In Progress",
    priority: "High",
  },
];

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(tasksArray);

  const addTask = (task: Omit<Task, "id">) => {
    const newTask = { ...task, id: tasks[tasks.length - 1].id + 1 };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must be used within TasksProvider");
  return context;
};
