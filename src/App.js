
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Layout/>}>
              <Route  index element={<Home/>}></Route>
              <Route  path="login" element={<Login/>}></Route>
              <Route  path="register" element={<Register/>}></Route>
              <Route  path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
