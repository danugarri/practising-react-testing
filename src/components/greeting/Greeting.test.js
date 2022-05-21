import {render, screen} from '@testing-library/react'
import { Greeting } from './Greeting'

describe('The greeting component', () => { 
    test('should check the greeting text', () => {
        // Rule of the three A`s

        // 1. Arrange
        render(<Greeting />);

        // 2. Act
        // This component does not act anything

        //  3. Assert

        const hello= screen.getByText('HELLO WORLD', {exact: false});
        expect(hello).toBeInTheDocument();

        // Cheking regular expressions
        const hello2= screen.getByText(/HELLO WORLD/i);
        expect(hello2).toBeInTheDocument();
    });
 });
