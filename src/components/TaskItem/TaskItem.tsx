import { Button } from "@mui/material";
import React from "react";
import styles from "./TaskItem.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useTasks } from "../../context/TaskContext";
import type { Category, Priority, Status } from "../../types";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  description: string;
  category: Category;
  status: Status;
  priority: Priority;
}

const TaskItem: React.FC<Props> = ({
  id,
  title,
  description,
  category,
  status,
  priority,
}) => {
  const { updateTask, deleteTask } = useTasks();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className={styles.taskItem}>
        <div className={styles.taskItemBody}>
          <div className={styles.taskItemBodyLeftside}>
            <div className={styles.taskItemBodyTitle}>
              <span>{title}</span>
            </div>
            <div className={styles.taskItemBodyDescription}>
              <span>{description}</span>
            </div>
          </div>
          <div className={styles.taskItemBodyRigthside}>
            <div className={styles.taskItemBodyCategory}>{category}</div>
            <div className={styles.taskItemBodyStatus}>{status}</div>
            <div className={styles.taskItemBodyPriority}>{priority}</div>
          </div>
        </div>
        <div className={styles.taskItemControls}>
          {status != "Done" && (
            <Button
              variant="outlined"
              color="success"
              startIcon={<CheckIcon />}
              onClick={() =>
                updateTask({
                  id,
                  title,
                  description,
                  category,
                  status: "Done",
                  priority,
                })
              }
            ></Button>
          )}
          {status != "Done" && (
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() =>
                navigate(`/task/${id}/edit`, {
                  state: { background: location },
                })
              }
            ></Button>
          )}
          <Button
            variant="outlined"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => deleteTask(id)}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
