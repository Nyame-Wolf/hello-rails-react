import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Greeting from "./Greeting";

function App ()  {
return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Greeting />} />
    </Routes>
</BrowserRouter>
);
}
export default App;