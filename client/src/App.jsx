import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read from "./pages/Read.jsx";
import Create from "./pages/Create.jsx";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Read/>} path="/"/>
          <Route element={<Create/>} path="/create"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;