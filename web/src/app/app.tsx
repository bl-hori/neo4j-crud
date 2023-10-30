
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components';
import { Movies } from '../pages/movies';
import { People } from '../pages/people';
import { Visualization } from '../pages/visualization';

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies/*" element={<Movies />} />
        <Route path="/people/*" element={<People />} />
        <Route path="/visualization/*" element={<Visualization />} />
      </Routes>
    </div>
  );
}

export default App;
