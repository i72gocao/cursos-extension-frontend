import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Error404 from './pages/Error404';
import Login from './routes/Login';
import Test1 from './routes/Test1';
import Root from './routes/Root';
import ContactUs from './routes/ContactUs';
import Course from './pages/Course';
import Subscribe from './routes/Subscribe';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}  errorElement={<Error404/>}>
      <Route errorElement={<Error404/>}>
        <Route index element={<Home/>}/>
        <Route path="/auth/signin" element={<Login/>}/>
        <Route path="/pages/contact-us" element={<ContactUs/>}/>

        <Route path="/pages/course-descripcion/:id" element={<Course/>}/>
        
        {/* Inicio: Esta ruta debe ser privada solo para las personas logueadas, debe ir dentro de PersistentLogin o crear un contexto de persistencia de login */}
        <Route path="/pages/course-subscripcion/:id" element={<Subscribe/>}/>
        {/* Fin: Esta ruta debe ser privada solo para las personas logueadas */}
        
      </Route>
      {/* <Route element={<PersistLogin/>} errorElement={<Error403/>}>
        <Route path="/private/test1" element={<Test1/>}/>
        <Route path="/test2" element={<Test2/>}/>
        <Route path="/test3" element={<Test3/>}/>
        <Route path="/private/user/profile" element={<Profile/>}/>
        <Route path="/private/auth/user/logout" element={<Logout/>}/>
      </Route> */}
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
