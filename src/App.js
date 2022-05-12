import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landing-page/LandingPage";
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import PageNotFound from './pages/page-not-found/PageNotFound';
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
      <Route
        path="/sign-up"
        element={<SignUp />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;
