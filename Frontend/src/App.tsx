import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginSignupPage from "./Components/LoginSignupPage/LoginSignupPage";


function AuthLayout() {
  return <LoginSignupPage />; 
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {/* Index Route: Renders LoginForm (showLogin is true by default in LoginSignupPage) */}
          <Route index element={null} /> 
          
          {/* Sign Up Route: When the path is '/auth/signup', 
             you'll need to update LoginSignupPage to read the URL and show SignUpForm */}
          <Route path="auth/signup" element={null} /> 
          
          {/* Add more routes for your application here (e.g., /dashboard) */}
        </Route>
      </Routes>
    </>
  )
}

export default App