/* eslint-disable no-unused-vars */
import { useState, React, useEffect } from "react";
import Header from "./header";
import Table from "./Table";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../styles/mainContainer.styles.css";
import AddTodoInput from "./AddTodoInput";
const MainContainer = () => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todoCards, setTodoCards] = useState([]);
  const [doingCards, setDoingCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);
  console.log(doneCards);

  const saveStateToLocalStorage = (todoCards, doingCards, doneCards) => {
    const stateToSave = {
      todoCards,
      doingCards,
      doneCards,
    };
    localStorage.setItem("todoAppData", JSON.stringify(stateToSave));
  };

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

    saveStateToLocalStorage(active, inProgress, completed);
  };
  function uniqueIdGenerator() {
    const timestamp = new Date().getTime(); // Get a unique timestamp
    const random = Math.floor(Math.random() * 1000); // Get a random number
    return `${timestamp}-${random}`;
  }

  const handleNewTodoTitleChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handelAddToDo = () => {
    // Add a new todo item to the "ToDo" column
    if (newTodoTitle.trim() === "") {
      // Don't add empty todo items
      return;
    }

    const newTodo = {
      id: uniqueIdGenerator(), // Use a unique ID generator library or function
      title: newTodoTitle,
      imageUrl: "URL7", // You can add a default URL or leave it empty
    };

    // Update the existing todoCards state with the new todo item
    setTodoCards([...todoCards, newTodo]); // Add the new todo item to the "ToDo" column

    // Clear the input field
    setNewTodoTitle("");
    saveStateToLocalStorage([...todoCards, newTodo], doingCards, doneCards);
  };
  const deleteCard = (cardId, column) => {
    let updatedTodoCards = [...todoCards];
    let updatedDoingCards = [...doingCards];
    let updatedDoneCards = [...doneCards];

    if (column === "ToDo") {
      updatedTodoCards = updatedTodoCards.filter((card) => card.id !== cardId);
    } else if (column === "Doing") {
      updatedDoingCards = updatedDoingCards.filter(
        (card) => card.id !== cardId
      );
    } else if (column === "Done") {
      updatedDoneCards = updatedDoneCards.filter((card) => card.id !== cardId);
    }

    setTodoCards(updatedTodoCards);
    setDoingCards(updatedDoingCards);
    setDoneCards(updatedDoneCards);

    // Update local storage
    saveStateToLocalStorage(
      updatedTodoCards,
      updatedDoingCards,
      updatedDoneCards
    );
  };

  useEffect(() => {
    // Function to retrieve data from localStorage
    const getLocalStorageData = () => {
      const storedData = localStorage.getItem("todoAppData");
      return storedData ? JSON.parse(storedData) : [];
    };

    // When the component mounts, try to get the state from localStorage
    const initialState = getLocalStorageData() || {
      todoCards: [
        { id: 1, title: "Task 1", imageUrl: "URL1" },
        { id: 2, title: "Task 2", imageUrl: "URL2" },
        // Add more Todo cards as needed
      ],
      doingCards: [
        { id: 3, title: "Task 3", imageUrl: "URL3" },
        { id: 4, title: "Task 4", imageUrl: "URL4" },
        // Add more Doing cards as needed
      ],
      doneCards: [
        { id: 5, title: "Task 5", imageUrl: "URL5" },
        { id: 6, title: "Task 6", imageUrl: "URL6" },
        // Add more Done cards as needed
      ],
    };

    // Initialize the state with data from localStorage
    setTodoCards(initialState.todoCards);
    setDoingCards(initialState.doingCards);
    setDoneCards(initialState.doneCards);
  }, []);

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
            deleteCard={deleteCard}
          />
        </div>
      </DragDropContext>
      <div className="mainInput">
        <AddTodoInput
          handelAddToDo={handelAddToDo}
          newTodoTitle={newTodoTitle} // Pass the new todo title to the input component
          handleNewTodoTitleChange={handleNewTodoTitleChange}
        />
      </div>
    </div>
    // </DragDropContext>
  );
};

export default MainContainer;
