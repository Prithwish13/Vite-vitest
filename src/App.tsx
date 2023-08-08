import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
