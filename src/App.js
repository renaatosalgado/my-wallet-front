import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./pages/Sign-up";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
