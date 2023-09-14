/* eslint-disable react/prop-types */
import { TextField, Button } from "@mui/material";

const AddTodoInput = ({
  handelAddToDo,
  newTodoTitle,
  handleNewTodoTitleChange,
}) => {
  return (
    <div>
      <TextField
        placeholder="Here"
        size="medium"
        inputProps={{
          style: { fontSize: "1.5rem" },
        }}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: { sm: 500, md: 510 },
          "& .MuiInputBase-root": {
            height: 80,
          },
        }}
        value={newTodoTitle}
        onChange={handleNewTodoTitleChange}
      />
      <Button variant="contained" onClick={handelAddToDo}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTodoInput;
