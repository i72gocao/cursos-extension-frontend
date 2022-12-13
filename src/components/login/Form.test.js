import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, waitFor, screen } from '@testing-library/react'

import {BrowserRouter} from 'react-router-dom'

import AuthContext from '../../context/AuthContext';
import { MessageProvider } from '../../context/MessageContext';

import Form from "./Form";
import LinkAllUsers from '../header/LinkAllUsers'

const data = {
    id: 2,
    email: 'user@uco.es',
    username: 'a12tutim',
    fullname: 'Timmy Turner'
}

const setup = () => {
    
    const handleSubmit = jest.fn();
    
    const utils = render(<AuthContext.Provider value={data}><MessageProvider><Form handleSubmit={handleSubmit}/></MessageProvider></AuthContext.Provider>,{wrapper: BrowserRouter});
    const inputEmail = screen.getByLabelText("email");
    const inputPassword = screen.getByLabelText("password");
    const btn = screen.getByText("Sign in");


    return {
        ...utils,
        inputEmail,
        inputPassword,
        btn,
        handleSubmit
    }
}



const server = setupServer(
  rest.post(process.env.REACT_APP_API_SIGNIN, (req, res, ctx) => {
      return res(
      ctx.json(
        {
          email: 'user@uco.es',
          password: '12345678',
        }
      ),
    )
  }),
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

it('check username in header after login', async() => {
    const setAuth = jest.fn();
    setAuth(data);

    render(<AuthContext.Provider value={{setAuth}}><MessageProvider><LinkAllUsers user={data}/></MessageProvider></AuthContext.Provider>,{wrapper: BrowserRouter});

    await waitFor(() => {
        expect(screen.getByText(/hola user@uco.es/i)).toHaveTextContent('Hola user@uco.es');
    })

})

test('should show login form', async () => {
    
    const {inputEmail,inputPassword,btn, handleSubmit} = setup()
    fireEvent.change(inputEmail, {target: {value: 'user@uco.es'}})
    expect(inputEmail.value).toBe('user@uco.es')
    fireEvent.change(inputPassword, {target: {value: '12345678'}})
    expect(inputPassword.value).toBe('12345678')

    fireEvent.submit(btn);
    expect(handleSubmit).toHaveBeenCalled();
})
