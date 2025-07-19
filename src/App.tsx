import { HashRouter, Route, Routes } from "react-router-dom";
import { TaskDetails } from "./pages/TaskDetails";
import { LayoutWithTaskList } from "./pages/LayoutWithTaskList";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayoutWithTaskList />}>
          <Route path="/task/:id/edit" element={<TaskDetails mode="edit" />} />
          <Route path="task/new" element={<TaskDetails mode="new" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
