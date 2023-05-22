import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";

import Signin from "./pages/Signin";

function App() {
    // return "Hello! Social Platform!"
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element="Homepage"></Route>
                <Route path="/signin" element={<Signin />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App