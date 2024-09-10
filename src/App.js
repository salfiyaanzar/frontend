
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar'
import Task from './Task';
import TaskList from './Tasklist';


const App=()=> {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/tasks/:id" element={<Task />} />
    <Route path="/task/newTask" element={<Task />} />

     </Routes>
    </>
  );
}

export default App;
