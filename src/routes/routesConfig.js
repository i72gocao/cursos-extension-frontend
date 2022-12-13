import Home from './Home';
import Login from './Login';
import Root from './Root';
import ContactUs from './ContactUs';
import Course from '../pages/Course';

import PersistentAuth from '../pages/PersistentAuth';

import PersistentAdmin from '../pages/PersistentAdmin';
import ManageCourses from "../pages/admin/ManageCourses";
import ManageMessage from "../pages/admin/ManageMessage";
import ListaCursos from './ListaCursos';
import UpdateCourse from "../pages/admin/UpdateCourse";

import Logout from '../pages/Logout';
import CreateCourse from '../pages/admin/CreateCourse';
import Messages from './Messages';
import { Outlet } from 'react-router';

const routesConfig = [
    {
      path: "/",
      element: <Root/>,
      errorElement: <div>Oops! There was an error.</div>,
      children: [
        {
          path: "",
          element: <Outlet/>,
          errorElement: <div>!Ooops! Bad route request 1</div>,
          children: [
            {index: true, element: <Home/>},
            {
              path: "auth/signin",
              element:<Login/>
            },
            {
              path: "/pages/contact-us",
              element:<ContactUs/>
            },
            {
              path: "/pages/course-descripcion/:id",
              element:<Course/>
            }
          ]
        },
        {
          errorElement: <div>!Ooops! Not authorized person. Only user participants.</div>,
          children: [
            {index: true, element: <PersistentAuth/>},
            {
              path: "/pages/course-subscripcion/mis-cursos",
              element:<ListaCursos/>
            },
            {
              path: "/pages/user/message",
              element:<Messages/>
            },
            {
              path: "/authentication/user/logout",
              element:<Logout/>
            }
          ]
        },
        {
          errorElement: <div>!Ooops! Not authorized person. Only user admin.</div>,
          children: [
            {index: true, element: <PersistentAdmin/>},
            {
              path: "/admin/pages/manage-courses",
              element:<ManageCourses/>
            },
            {
              path: "/admin/pages/manage-messages",
              element:<ManageMessage/>
            },
            {
              path: "/admin/pages/manage-courses/update/:id",
              element:<UpdateCourse/>
            },
            {
              path: "/admin/pages/manage-courses/create",
              element:<CreateCourse/>
            },
            {
              path: "/authentication/user/logout",
              element:<Logout/>
            }
          ]
        },
        {
          errorElement: <div>!Ooops! Not authorized person. Only user admin.</div>,
          
          path: "/adios/mundo/cruel",
          element: <div>Hola Mundo cruel</div>
        }
      ]
    }
  ]

  export default routesConfig;