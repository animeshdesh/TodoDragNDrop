import Header from "./header";
import Table from "./Table";
import "../styles/mainContainer.styles.css";
const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Header name="Animesh" />
      <div className="tableMainContainer">
        <Table tablename="To Do" />
        <Table tablename="Doing" />
        <Table tablename="Done" />
      </div>
    </div>
  );
};

export default MainContainer;
