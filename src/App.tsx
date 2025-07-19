import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskDetails } from "./pages/TaskDetails";
import { LayoutWithTaskList } from "./pages/LayoutWithTaskList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWithTaskList />}>
          <Route path="/task/:id/edit" element={<TaskDetails mode="edit" />} />
          <Route path="task/new" element={<TaskDetails mode="new" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
