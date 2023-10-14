import * as React from "react";
import PageOne from "./pages/pageone";
import PageTwo from "./pages/pagetwo";
import PageThree from "./pages/pagethree";
import { BrowserRouter,  Route, Routes } from "react-router-dom"; 
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="bot" element={<PageTwo />} />
            <Route path="exit" element={<PageThree/>}/>
          </Routes>
        
      </BrowserRouter>
  </>
  );
}

export default App;
