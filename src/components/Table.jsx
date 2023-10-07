/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React } from "react";
import "../styles/table.styles.css";
import Card from "./card";
import AddTodoInput from "./AddTodoInput";
import { Droppable } from "react-beautiful-dnd";
const Table = ({
  todoCards,
  doingCards,
  doneCards,
  deleteCard,
  handelAddToDo,
  newTodoTitle,
  handleNewTodoTitleChange,
}) => {
  return (
    <>
      <Droppable droppableId="ToDo">
        {(provided) => (
          <div
            className="w-[30%] min-h-[10vh] bg-[#f0f0f0] overflow-y-auto rounded-[10px] flex flex-col items-center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="font-sans p-4 text-[25px]">To Do</h3>
            {todoCards?.map((card, index) => (
              <Card
                key={card?.id}
                cardTodo={card}
                index={index}
                title={card?.title}
                onDelete={() => deleteCard(card.id, "ToDo")}
              />
            ))}
            <AddTodoInput
              handelAddToDo={handelAddToDo}
              newTodoTitle={newTodoTitle}
              handleNewTodoTitleChange={handleNewTodoTitleChange}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="Doing">
        {(provided) => (
          <div
            className="w-[30%] min-h-[10vh] bg-[#f0f0f0] overflow-y-auto rounded-[10px] flex flex-col items-center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="font-sans p-4 text-[25px]">Doing</h3>
            {doingCards?.map((card, index) => (
              <Card
                key={card?.id}
                cardTodo={card}
                index={index}
                title={card?.title}
                onDelete={() => deleteCard(card.id, "Doing")}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="Done">
        {(provided) => (
          <div
            className="w-[30%] min-h-[10vh] bg-[#f0f0f0] overflow-y-auto rounded-[10px] flex flex-col items-center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="font-sans p-4 text-[25px]">Done</h3>
            {doneCards?.map((card, index) => (
              <Card
                key={card?.id}
                cardTodo={card}
                index={index}
                title={card?.title}
                onDelete={() => deleteCard(card.id, "Done")}
                // imageUrl={card.imageUrl}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default Table;
