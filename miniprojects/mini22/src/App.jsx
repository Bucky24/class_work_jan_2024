import { useEffect } from 'react';
import CarComponent from './components/CarComponent';
import './App.css';
export default function App() {
  useEffect(() => {
    document.title = 'Digital Garage';
  }, []);

  return (
    <CarComponent />
  );
}
