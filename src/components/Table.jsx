/* eslint-disable react/prop-types */
import "../styles/table.styles.css";
import Card from "./card";
const Table = ({ tablename }) => {
  return (
    <div className="tableContainer">
      <h3 className="tableHeading">{tablename}</h3>
      <Card />
      <Card />
    </div>
  );
};

export default Table;
