import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import routesConfig from "./routes/routesConfig"

const routes = createBrowserRouter(routesConfig)

function App() {
  return <><RouterProvider router={routes}/></>;
}

export default App;
