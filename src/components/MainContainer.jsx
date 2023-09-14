/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./header";
import Table from "./Table";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../styles/mainContainer.styles.css";
const MainContainer = () => {
  const [todoCards, setTodoCards] = useState([
    { id: 1, title: "Task 1", imageUrl: "URL1" },
    { id: 2, title: "Task 2", imageUrl: "URL2" },
    // Add more Todo cards as needed
  ]);

  const [doingCards, setDoingCards] = useState([
    { id: 3, title: "Task 3", imageUrl: "URL3" },
    { id: 4, title: "Task 4", imageUrl: "URL4" },
    // Add more Doing cards as needed
  ]);

  const [doneCards, setDoneCards] = useState([
    { id: 5, title: "Task 5", imageUrl: "URL5" },
    { id: 6, title: "Task 6", imageUrl: "URL6" },
    // Add more Done cards as needed
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);

    if (!destination) {
      console.log("No Destination Selected");
      return; // Return early when no destination is selected
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      console.log("Same destination dropped");
      return; // Return early when the source and destination are the same
    }

    let add,
      active = [...todoCards],
      inProgress = [...doingCards],
      completed = [...doneCards];

    if (source.droppableId === "ToDo") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "Doing") {
      add = inProgress[source.index];
      inProgress.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "ToDo") {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "Doing") {
      inProgress.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setTodoCards(active);
    setDoingCards(inProgress);
    setDoneCards(completed);
  };

  return (
    <div className="mainContainer">
      <Header name="Animesh" />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="tableMainContainer">
          <Table
            todoCards={todoCards}
            setTodoCards={setTodoCards}
            doingCards={doingCards}
            setDoingCards={setDoingCards}
            doneCards={doneCards}
            setDoneCards={setDoneCards}
          />
        </div>
      </DragDropContext>
    </div>
    // </DragDropContext>
  );
};

export default MainContainer;
