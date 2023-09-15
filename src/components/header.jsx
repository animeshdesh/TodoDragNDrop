/* eslint-disable react/prop-types */
import "../styles/header.styles.css";
const Header = ({ name }) => {
  return (
    <div className="headerMain">
      <div className="headerWelcome">
        <h3 className="headerHeading">ToDo App</h3>
      </div>
      <div className="headerWelcome">
        <h3 className="headerHeading">Board 1</h3>
      </div>
      <div className="headerWelcome">
        <h3 className="headerHeading">Welcome {name}</h3>
      </div>
    </div>
  );
};

export default Header;
