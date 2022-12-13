import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, screen} from '@testing-library/react'

import {BrowserRouter} from 'react-router-dom'

import AuthContext from '../../context/AuthContext';
import { MessageProvider } from '../../context/MessageContext';

import Contactar from './Contactar'

const data = {
    id: 0,
    email: '',
    username: '',
    fullname: ''
}


const setup = () => {    
    const handleSubmit = jest.fn();
    
    const utils = render(<AuthContext.Provider value={data}><MessageProvider><Contactar handleSubmit={handleSubmit}/></MessageProvider></AuthContext.Provider>,{wrapper: BrowserRouter});

    const fullname = screen.getByLabelText("fullname");
    const username = screen.getByLabelText("username");
    const email = screen.getByLabelText("email");
    const btn = screen.getByText("Submit");
    const title = screen.getByText("Formulario de Petición de Registro");

    return {
        ...utils,
        fullname,
        username,
        email,
        btn,
        title,
        handleSubmit
    }
}

test("Submission of the participating user registration request", () => {

    const {fullname,username,email,btn,handleSubmit} = setup();
    fireEvent.change(fullname, {target: {value: "Francisco Perez Arias"}});
    expect(fullname.value).toBe("Francisco Perez Arias");
    fireEvent.change(username, {target: {value: "i72username"}});
    expect(username.value).toBe("i72username");
    fireEvent.change(email, {target: {value: "user@uco.es"}});
    expect(email.value).toBe("user@uco.es");

    fireEvent.submit(btn);
    expect(handleSubmit).toHaveBeenCalled();
})

test("show title in page 'Contactar'",() => {
    
    const {title} = setup();
    expect(title).toHaveTextContent("Formulario de Petición de Registro");
})