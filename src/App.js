import logo from './logo.svg';
import './App.css';
import EventForm from './Component/EventForm';
import EventData from './Component/EventData';
import { Route, Routes } from 'react-router';
import Header from './Component/Header/Header';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<EventForm/>}/>
        <Route exact path='/eventData' element={<EventData/>}/>
      </Routes>
    </>
  );
}

export default App;
