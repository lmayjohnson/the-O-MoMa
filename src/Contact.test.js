import React from 'react';
import {render, screen} from '@testing-library/react'
import Contact from './Components/Contact';
test('Contact component tests', () => {
        render(<Contact />);
        //Name and message input field should be present
        const nameElement = screen.getByText("name", {exact:false});
    expect(nameElement).toBeInTheDocument();
    
    const messageElement = screen.getByText("message", {exact:false});
    expect(messageElement).toBeInTheDocument();
    });

