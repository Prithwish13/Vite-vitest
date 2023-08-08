import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import './app.css';
import YouTubeForm from './components/YoutubeForm';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<YouTubeForm />} />
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
