import './Question.css';
import React from 'react';

const Question = () => {
    return (
        <div className='my-4 container border border-2 rounded'>
            <h2>Question and Answers</h2>
            <div className='my-2 bg-info py-2 text-start ps-4 rounded'>
                <h5>Props vs state</h5>
                <p >
                    1. Props are used to pass data from a parent component to a child component &
                     State is used to manage data that changes within a component.<br />
                    2. It is Immutable (cannot be modified) & It is Mutable ( can be modified). <br />
                    3. Props are read-only & State is both read and write.

                </p>
            </div>
            <div className='my-2 bg-warning py-2 text-start ps-4 rounded'>
                <h5>How does useState work?</h5>
                <p >
                useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
                </p>
            </div>
            <div className='my-2 bg-danger py-2 text-start ps-4 rounded'>
                <h5>Purpose of useEffect other than fetching data</h5>
                <p >
                The useEffect hook allows you to run side effects after rendering the component, such as updating the document title, adding or removing event listeners, starting or stopping a timer, and more.
                </p>
            </div>
            <div className='my-2 bg-success py-2 text-start ps-4 rounded'>
                <h5>How Does React work?</h5>
                <p >
                React is a JavaScript library for building user interfaces. It uses a component-based architecture, which means that the UI is broken down into reusable components that can be composed together to create complex interfaces. React also uses a virtual DOM (Document Object Model) to manage the rendering of components. <br />
                A React application is made up of components. Each component represents a part of the user interface and can be reused throughout the application. Components can be defined as functional components or class components. <br />
                When a component is rendered, React creates a virtual DOM representation of the component and compares it to the previous version of the DOM. If there are any differences between the two versions, React updates the actual DOM to reflect the changes. <br />
                React provides a declarative way to handle user events such as clicking a button or submitting a form. Instead of manipulating the DOM directly, React uses event handlers to update the component state or trigger other actions.
                </p>
            </div>
            
        </div>
    );
};

export default Question;