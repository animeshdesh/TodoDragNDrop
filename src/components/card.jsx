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
          className="cardContainer"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="cardItems">
            <h2 className="cardTitle">{title}</h2>
            <IconButton onClick={onDelete} color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
