/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React } from "react";
import "../styles/table.styles.css";
import Card from "./card";
import { Droppable } from "react-beautiful-dnd";
const Table = ({ todoCards, doingCards, doneCards, deleteCard }) => {
  return (
    <>
      <div>
        {/* <Droppable droppableId="Todo">
          {(provided) => {
            <div
              className="tableContainer"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className="tableHeading">To Do</h3>
              {todoCards.map((card, index) => (
                <Card
                  key={card.id}
                  cardTodo={card}
                  index={index}
                  title={card.title}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>;
          }}
        </Droppable> */}
      </div>
      <Droppable droppableId="ToDo">
        {(provided) => (
          <div
            className="tableContainer"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="tableHeading">To Do</h3>
            {todoCards?.map((card, index) => (
              <Card
                key={card?.id}
                cardTodo={card}
                index={index}
                title={card?.title}
                onDelete={() => deleteCard(card.id, "ToDo")}
                // imageUrl={card.imageUrl}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="Doing">
        {(provided) => (
          <div
            className="tableContainer"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="tableHeading">Doing</h3>
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
            className="tableContainer"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3 className="tableHeading">Done</h3>
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
