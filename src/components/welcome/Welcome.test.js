import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome";
import {BrowserRouter as Router} from 'react-router-dom';

describe('The Welcome component', () => { 
    test('should check if the text A (It is the white mode) is in the document', () => {
        // Arrange
        render(<Router><Welcome /></Router>);
        // ACT

        // Assetions
        const textA= screen.getByText('It is the white mode');
        expect(textA).toBeInTheDocument();

    });
 });