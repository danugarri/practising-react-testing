import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { AsyncComponent } from './AsyncComponent';
describe('The AsyncComponent', () => { 
    it('should render the data if the request succeeds', async () => {
        // Arrange
        render(<BrowserRouter><AsyncComponent /></BrowserRouter>);
        //  Act
        // Asertion
        // We must use find, becasuse this kind of methods return a promise, and that is 
        // what we need to await the fetch method on the componet to get the data expected
        const listItems = await screen.findAllByRole('listitem');
        //  here we are storing an array of html elements
        expect(listItems).not.toHaveLength(0);
        // If this array is different from 0 that means the request return data
    });
});
describe('The AsyncComponent ALSO', () => { 
    it('should render the data if the request succeeds', async () => {
        console.log('Here we are testing in a more precise way');
        // Arrange
        //  Replacing fetch() method with my own function
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: (
                async () => [{id:'test', title:'Esto es una prueba'}]
            )
        });
        render(<BrowserRouter><AsyncComponent /></BrowserRouter>);
        //  Act
        // Asertion
       
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).not.toHaveLength(0);
       
    });
});