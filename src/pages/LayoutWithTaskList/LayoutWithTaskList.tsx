import { Outlet } from "react-router-dom";
import { TaskList } from "../Tasklist";

const LayoutWithTaskList = () => {
  return (
    <>
      <TaskList />
      <Outlet />
    </>
  );
};

export default LayoutWithTaskList;
