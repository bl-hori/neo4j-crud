
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components';
import { Movies } from '../pages/movies';
import { People } from '../pages/people';

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies/*" element={<Movies />} />
        <Route path="/people/*" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
