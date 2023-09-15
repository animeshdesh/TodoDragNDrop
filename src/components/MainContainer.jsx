/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, React, useEffect } from "react";
import Header from "./header";
import Table from "./Table";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../styles/mainContainer.styles.css";
import { Link } from "react-router-dom";

const MainContainer = ({ name, setName }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todoCards, setTodoCards] = useState([]);
  const [doingCards, setDoingCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);
  //   const history = useHistory();

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
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      console.log("Same destination dropped");
      return;
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
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `${timestamp}-${random}`;
  }

  const handleNewTodoTitleChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const handelAddToDo = () => {
    if (newTodoTitle.trim() === "") {
      return;
    }
    const newTodo = {
      id: uniqueIdGenerator(),
      title: newTodoTitle,
    };

    setTodoCards([...todoCards, newTodo]);
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
    saveStateToLocalStorage(
      updatedTodoCards,
      updatedDoingCards,
      updatedDoneCards
    );
  };

  const clearAllTodos = () => {
    setTodoCards([]);
    setDoingCards([]);
    setDoneCards([]);
    localStorage.removeItem("todoAppData");
  };
  const clearNameAndRedirect = () => {
    localStorage.removeItem("name");
  };

  useEffect(() => {
    const getLocalStorageData = () => {
      const storedData = localStorage.getItem("todoAppData");
      return storedData ? JSON.parse(storedData) : [];
    };
    const initialState = getLocalStorageData() || {
      todoCards: [],
      doingCards: [],
      doneCards: [],
    };
    setTodoCards(initialState.todoCards);
    setDoingCards(initialState.doingCards);
    setDoneCards(initialState.doneCards);
  }, []);

  return (
    <div className="mainContainer">
      <Header name={name} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="tableMainContainer">
          <Table
            todoCards={todoCards}
            doingCards={doingCards}
            doneCards={doneCards}
            deleteCard={deleteCard}
            handelAddToDo={handelAddToDo}
            newTodoTitle={newTodoTitle}
            handleNewTodoTitleChange={handleNewTodoTitleChange}
          />
        </div>
      </DragDropContext>
      <div className="mainButtonContainer">
        <button className="mainButton" onClick={() => clearAllTodos()}>
          <div>Clear All ToDo's</div>
        </button>
        {/* <Link to="/">
          <button className="mainButton" onClick={clearNameAndRedirect}>
            <div>Log out</div>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default MainContainer;
