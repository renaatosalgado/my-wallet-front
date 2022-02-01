import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Login, SignUp } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";

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
