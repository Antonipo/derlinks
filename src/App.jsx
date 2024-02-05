import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { LinkProvider } from "./context/LinkContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LinksPage from "./pages/LinksPage";
import LinkFormPage from "./pages/LinkFormPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import LinkGroupFormPage from "./pages/LinkGroupFormPage";
import GroupPage from "./pages/GroupPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <LinkProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10 font-['Apple Color Emoji']">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/add-group" element={<LinkGroupFormPage />} />
                <Route path="/group" element={<GroupPage />} />
                <Route path="/group/:id" element={<LinkGroupFormPage />} />

                <Route path="/links/:id" element={<LinksPage />} />
                <Route path="/add-link/:id" element={<LinkFormPage />} />
                <Route path="/links/:id" element={<LinkFormPage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </LinkProvider>
    </AuthProvider>
  );
}

export default App;
