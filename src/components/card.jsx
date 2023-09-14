/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/card.styles.css";
import { Draggable } from "react-beautiful-dnd";
const Card = ({ title, index, cardTodo }) => {
  console.log(cardTodo.id.toString());
  return (
    <Draggable draggableId={cardTodo.id.toString()} index={index}>
      {(provided) => (
        <div
          className="cardContainer"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Image"
              className="cardImage"
            /> */}
          <div className="cardItems">
            <h2 className="cardTitle">{title}</h2>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
