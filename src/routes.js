import App from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Chat from "./Chat";

function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/chat" exact element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes;