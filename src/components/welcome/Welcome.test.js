import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Welcome } from "./Welcome";
import {BrowserRouter as Router} from 'react-router-dom';

describe('The Welcome component', () => { 
    beforeAll(() => {
        console.log('Checking the user interactions with the button');
    });
    test('should check if the text A (It is the white mode) is in the document without clicking the button', () => {
        // Arrange
        render(<Router><Welcome /></Router>);
        // ACT

        // Assetions
        const textA= screen.getByText('It is the white mode');
        expect(textA).toBeInTheDocument();

    });
     test.skip('should check if the text A (It is the white mode) is in the document when clicking the button', () => {
        // Arrange
        render(<Router><Welcome /></Router>);
        // ACT
        const buttonElement= screen.getByRole('button', {name: 'switch'});
        userEvent.click(buttonElement);
        // Assetions
        const textA= screen.getByText('It is the dark mode', {exact:false});
        expect(textA).toBeInTheDocument();

    });
    });