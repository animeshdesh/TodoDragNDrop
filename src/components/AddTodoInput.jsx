/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import "../styles/addTodoInput.styles.css";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const AddTodoInput = ({
  handelAddToDo,
  newTodoTitle,
  handleNewTodoTitleChange,
}) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    handelAddToDo();
  };
  return (
    <div className="inputContainer">
      <form onSubmit={handelSubmit}>
        <TextField
          placeholder="Add Task To TODO"
          size="medium"
          inputProps={{
            style: { fontSize: "1.5rem" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" edge="end">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            width: { sm: "100%", md: "100%" },
            "& .MuiInputBase-root": {
              height: 80,
            },
          }}
          value={newTodoTitle}
          onChange={handleNewTodoTitleChange}
        />
      </form>

      {/* <Button variant="contained" onClick={handelAddToDo}>
        Add Task
      </Button> */}
    </div>
  );
};

export default AddTodoInput;
