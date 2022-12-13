// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import {createMemoryRouter, RouterProvider} from 'react-router-dom'

import routesConfig from './routes/routesConfig'

test('Checking name logo in homepage', async () => {

  const router = createMemoryRouter(routesConfig,{ initialEntries: ["/"]});

  render(<RouterProvider router={router}/>);

  expect(screen.getByText(/ED-UCO/i)).toBeInTheDocument()
})

test('landing on a bad page', async () => {
  
  const router = createMemoryRouter(routesConfig,{initialEntries: ["/auth/signin"]});
  // const router = createMemoryRouter(routesConfig,{initialEntries: ["some/bad/route"]});

  render(<RouterProvider router={router}/>);

  expect(screen.getByText(/Form de acceso/i)).toBeInTheDocument()
  // expect(screen.getByText(/Oops! There was an error./i)).toBeInTheDocument()
});
