import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateDeckPage from "./pages/CreateDeckPage";
import StudyPage from "./pages/StudyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-deck" element={<CreateDeckPage />} />
        <Route path="/study" element={<StudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;