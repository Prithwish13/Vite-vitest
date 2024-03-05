import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import './app.css';
import YouTubeForm from './components/YoutubeForm';
import LoginForm from './components/LoginForm';
import RecipeForm from './components/RecipeForm';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
