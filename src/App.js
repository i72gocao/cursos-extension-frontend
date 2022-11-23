import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Error404 from './pages/Error404';
import Error403 from './pages/Error403';
import Login from './routes/Login';
import Test1 from './routes/Test1';
import Root from './routes/Root';
import ContactUs from './routes/ContactUs';
import Course from './pages/Course';
import Subscribe from './routes/Subscribe';
import PersistentAuth from './pages/PersistentAuth';
import PersistentAdmin from './pages/PersistentAdmin';

import ManageCourses from "./pages/admin/ManageCourses";
import Message from "./pages/admin/Message";
import ListaCursos from './routes/ListaCursos';
import Logout from './pages/Logout';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}  errorElement={<Error404/>}>
      <Route errorElement={<Error404/>}>
        <Route index element={<Home/>}/>
        <Route path="/auth/signin" element={<Login/>}/>
        <Route path="/pages/contact-us" element={<ContactUs/>}/>
        <Route path="/pages/course-descripcion/:id" element={<Course/>}/>

        <Route path="/error/authorization/401" element={<Error403/>}/>        
      </Route>

      <Route element={<PersistentAuth/>} errorElement={<Error403/>}>
        {/* Inicio: Esta ruta debe ser privada solo para las personas logueadas, debe ir dentro de PersistentLogin o crear un contexto de persistencia de login */}
        <Route path="/pages/course-subscripcion/:id" element={<Subscribe/>}/>
        {/* Fin: Esta ruta debe ser privada solo para las personas logueadas */}
        <Route path="/pages/course-subscripcion/mis-cursos" element={<ListaCursos/>}/>
        {/* <Route path="/private/user/profile" element={<Profile/>}/>*/}
        <Route path="/authentication/user/logout" element={<Logout/>}/>
      </Route>

      <Route element={<PersistentAdmin/>} errorElement={<Error403/>}>
        <Route path="/admin/pages/manage-courses" element={<ManageCourses/>}/>
        <Route path="/admin/pages/messages" element={<Message/>}/>
        <Route path="/authentication/user/logout" element={<Logout/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
