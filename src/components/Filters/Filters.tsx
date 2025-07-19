import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import type { Category, Priority, Status } from "../../types";

interface Props {
  category: Category | "";
  status: Status | "";
  priority: Priority | "";
  changeCat: (value: Category | "") => void;
  changeStatus: (value: Status | "") => void;
  changePriority: (value: Priority | "") => void;
}
const Filters: React.FC<Props> = ({
  category,
  status,
  priority,
  changeCat,
  changeStatus,
  changePriority,
}) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <FormControl fullWidth margin="dense">
          <InputLabel id="category-label">Категория</InputLabel>
          <Select
            required
            labelId="category-label"
            name="category"
            value={category}
            onChange={(e) => changeCat(e.target.value)}
            label="Категория"
          >
            <MenuItem value="Bug">Bug</MenuItem>
            <MenuItem value="Feature">Feature</MenuItem>
            <MenuItem value="Documentation">Documentation</MenuItem>
            <MenuItem value="Refactor">Refactor</MenuItem>
            <MenuItem value="Test">Test</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="status-label">Статус</InputLabel>
          <Select
            required
            labelId="status-label"
            name="status"
            value={status}
            onChange={(e) => changeStatus(e.target.value)}
            label="Статус"
          >
            <MenuItem value="To Do">To Do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="dense">
          <InputLabel id="priority-label">Приоритет</InputLabel>
          <Select
            required
            labelId="priority-label"
            name="priority"
            value={priority}
            onChange={(e) => changePriority(e.target.value)}
            label="Приоритет"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Filters;
