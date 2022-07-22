
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
   <Routes>
  
  <Route exact path="/" element={ <Home/>}> </Route>
  <Route exact path="/login" element={ <Login/>}> </Route>
  <Route exact path="/register" element={ <Register/>}> </Route>
  <Route exact path="/logout" element={ <Logout/>}> </Route>
  <Route exact path="/home" element={ <Home/>}> </Route>
   <Route path="*" element={<h1>Page not Found</h1>}></Route>
   </Routes>
  );
}

export default App;
