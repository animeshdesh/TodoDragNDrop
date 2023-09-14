/* eslint-disable react/prop-types */
import "../styles/header.styles.css";
const Header = ({ name }) => {
  return (
    <div className="headerMain">
      <h3 className="headerHeading">ToDo</h3>
      <h3 className="headerHeading">Board 1</h3>
      <h3 className="headerHeading">Welcome {name}</h3>
    </div>
  );
};

export default Header;
