import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Login, SignUp, Main } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
