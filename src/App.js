import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import { AuthContextProvider } from "./Components/Context/AuthContext";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Account from "./Components/Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
