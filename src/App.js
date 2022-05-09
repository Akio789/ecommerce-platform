import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landing-page/LandingPage";
import Login from './pages/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
}

export default App;
