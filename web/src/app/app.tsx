
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components';
import { Movies } from '../pages/movies';

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies/*" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
