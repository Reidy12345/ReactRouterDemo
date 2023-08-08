import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactsPage from "./components/ContactsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactsPage" element={<ContactsPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
