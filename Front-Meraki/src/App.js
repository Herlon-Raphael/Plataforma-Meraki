import './App.css';
import { AuthProvider } from './context/AuthContext';
import {MDBContainer} from 'mdb-react-ui-kit'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Templates/Login';
import Registro from './components/Templates/Registro';
import Dashboard from './components/Templates/Dashboard';
import PrivateRoute from './components/Atoms/PrivateRoute';
import Perfil from './components/Templates/Perfii'
import Aulas from './components/Templates/Aulas'
import Cursos from './components/Templates/Cursos'
import PaginaAula from './components/Templates/PaginaAula';
function App() {
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
      <Router>
        <AuthProvider>
          <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registro/>} />
          <Route path='/profile' element={<Perfil/>} />
          <Route path='/classes/:name' element={<Aulas/>} />
          <Route path='/classes/:name/:number' element={<PaginaAula/>} />
          <Route path='/classes/' element={<Cursos/>} />
          <Route path='/' element={<PrivateRoute>
                                      <Dashboard />
                                    </PrivateRoute>} />

          </Routes>
        </AuthProvider>
      </Router>
    </MDBContainer>
  )
}

export default App;
