/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../styles/welcomePage.styles.css";
import { TextField } from "@mui/material";
const WelcomePage = ({ handelNameChange, name }) => {
  return (
    <>
      <div className="welcomeContainer">
        <div className="welcomeBox">
          <div className="headingBox">
            <h1 className="welcomeHeading">Welcome to ToDo App</h1>
          </div>
          <div className="welcomeText">
            <h1>Please Enter your Name</h1>
          </div>
          <form>
            <TextField
              placeholder="Name"
              size="medium"
              inputProps={{
                style: { fontSize: "1.5rem" },
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                width: { sm: "100%", md: "100%" },
                "& .MuiInputBase-root": {
                  height: 80,
                },
              }}
              value={name}
              onChange={handelNameChange}
            />
          </form>
          <Link to="/todo">
            <button>
              <div className="welcomeButton">Log In</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
