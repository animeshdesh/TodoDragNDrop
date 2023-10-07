/* eslint-disable react/prop-types */
import "../styles/header.styles.css";
const Header = ({ name }) => {
  return (
    <div className="flex justify-between p-4">
      <div className="border-2 border-[#4f709c] rounded-[10px] bg-[#4f709c]">
        <h3 className="text-white font-sans font-medium text-base m-2">
          ToDo App
        </h3>
      </div>
      <div className="border-2 border-[#4f709c] rounded-[10px] bg-[#4f709c]">
        <h3 className="text-white font-sans font-medium text-base m-2">
          Board 1
        </h3>
      </div>
      <div className="border-2 border-[#4f709c] rounded-[10px] bg-[#4f709c]">
        <h3 className="text-white font-sans font-medium text-base m-2">
          Welcome {name}
        </h3>
      </div>
    </div>
  );
};

export default Header;
