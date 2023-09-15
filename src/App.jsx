import MainContainer from "./components/mainContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import WelcomePage from "./components/WelcomePage";
import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  console.log(name);
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);
  const handelNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  };
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage
                handelNameChange={handelNameChange}
                name={name}
                setName={setName}
              />
            }
          />
        </Routes>

        <Routes>
          <Route path="/todo" element={<MainContainer name={name} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
