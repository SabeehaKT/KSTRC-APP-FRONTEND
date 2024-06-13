import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/add" element={<AddBus/>}/>
      <Route path ="/search" element={<SearchBus/>}/>
      <Route path ="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
