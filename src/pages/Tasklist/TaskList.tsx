import { Button, Container, CssBaseline } from "@mui/material";
import styles from "./TaskList.module.css";
import React from "react";
import { Filters } from "../../components/Filters";
import { TaskItem } from "../../components/TaskItem";
import { useTasks } from "../../context/TaskContext";
import type { Category, Status, Priority } from "../../types";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [category, setCategory] = React.useState<Category | "">("");
  const [status, setStatus] = React.useState<Status | "">("");
  const [priority, setPriority] = React.useState<Priority | "">("");
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const handleStatusChange = (value: Status | "") => {
    setStatus(value);
    setCategory("");
    setPriority("");
  };

  const handleCategoryChange = (value: Category | "") => {
    setCategory(value);
    setStatus("");
    setPriority("");
  };

  const handlePriorityChange = (value: Priority | "") => {
    setPriority(value);
    setStatus("");
    setCategory("");
  };

  const sortedTasks = React.useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (status) {
        const aMatch = a.status === status ? 0 : 1;
        const bMatch = b.status === status ? 0 : 1;
        if (aMatch !== bMatch) return aMatch - bMatch;
      }

      if (category) {
        const aMatch = a.category === category ? 0 : 1;
        const bMatch = b.category === category ? 0 : 1;
        if (aMatch !== bMatch) return aMatch - bMatch;
      }

      if (priority) {
        const aMatch = a.priority === priority ? 0 : 1;
        const bMatch = b.priority === priority ? 0 : 1;
        if (aMatch !== bMatch) return aMatch - bMatch;
      }

      return 0;
    });
  }, [tasks, category, status, priority]);

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          bgcolor: "#FFF6EB",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div className={styles.taskListTop}>
          <div className={styles.taskListTopLeftside}>
            <Button variant="contained" onClick={() => navigate("/task/new")}>
              Добавить задачу
            </Button>
          </div>
          <div className={styles.taskListTopRigthside}>
            <Filters
              category={category}
              priority={priority}
              status={status}
              changeCat={handleCategoryChange}
              changeStatus={handleStatusChange}
              changePriority={handlePriorityChange}
            />
          </div>
        </div>
        <div className={styles.taskList}>
          {sortedTasks.map(
            ({ id, title, description, category, status, priority }) => (
              <TaskItem
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                status={status}
                priority={priority}
              />
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default TaskList;
