import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginSignupPage from "./Components/LoginSignupPage/LoginSignupPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function AuthLayout() {
  return <LoginSignupPage />; 
}

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AuthLayout />} />
        <Route path="/auth/login" element={<AuthLayout />} />
        <Route path="/auth/signup" element={<AuthLayout />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
 
      </Routes>
    </>
  )
}

export default App