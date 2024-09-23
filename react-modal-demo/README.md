# Modal Component

This is a simple and reusable Modal component built with React. It was created as part of my studies at OpenClassrooms.


To use the Modal component in your React application, you can import it and include it in your JSX.

```
import React, { useState } from 'react';
import Modal from '@arthurpoignant/react-modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content</p>
      </Modal>
    </div>
  );
}

export default App;
```


The Modal component accepts the following props:

isOpen (boolean): Determines whether the modal is open or closed.
onClose (function): A function to be called when the modal is closed.
children (node): The content to be displayed inside the modal.

## Installation

To install the Modal component, you can use npm or yarn:

```bash
npm install @arthurpoignant/react-modal
# or
yarn add @arthurpoignant/react-modal