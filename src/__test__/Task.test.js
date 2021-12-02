import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, rerender, screen } from '@testing-library/react';
import userevent from '@testing-library/user-event';
import Task from '../Task';
import App from '../App';

let task = {id: 0, name: 'Go to the supermarket', complete: false};

const toggleComplete = () => task = {id: 0, name: 'Go to the supermarket', complete: true};

describe("Task component tests", () => {
    const renderComponent = () => render(<Task todo={task} onClick={toggleComplete} onRemoveClick={() => {}} />);

    beforeEach(() => {
        renderComponent();
    })

    afterEach(() => cleanup());

    test('remove button has correct text', () => {
        const button = screen.getByText("Remove");
        expect(button).toBeVisible();
    });

    test('state button has correct text before being clicked', () => {
        const button = screen.getByText("Incomplete");
        expect(button).toBeVisible();
    });

    test('state button has correct text after being clicked', () => {
        userevent.click(screen.getByText("Incomplete"));

        renderComponent();

        const completeButton = screen.getByText("Complete");
        expect(completeButton).toBeVisible();
    });

    test('should find all buttons in the file', async () => {
        const buttonElement = screen.getAllByRole("button");
        expect(buttonElement[0]).toBeVisible();
    
    });

    test('should render same text passed into h3 task', async () => {
        const headingElement = screen.getByText("Go to the supermarket");
        expect(headingElement).toBeInTheDocument();
    });

    test('should render heading', async () => {
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    });
});



