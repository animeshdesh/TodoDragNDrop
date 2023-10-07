/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/card.styles.css";
import { Button } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const Card = ({ title, index, cardTodo, onDelete }) => {
  return (
    <Draggable draggableId={cardTodo?.id.toString()} index={index}>
      {(provided) => (
        <div
          className="w-[95%] h-[8vh] bg-[#e5d283] m-2 border-2 rounded-[10px] transform hover:scale-102 hover:border-blue-500 "
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-[25px] m-4">{title}</h2>
            <IconButton onClick={onDelete} color="primary">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
