import './App.css';
import { Routes, Route } from 'react-router-dom';
import Countries from './pages/Countries';
import Details from './pages/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Countries />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
