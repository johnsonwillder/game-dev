import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

/*import React from 'react'
import Navbar from './layouts/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}*/
