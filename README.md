Project Name : TechStack Builder

A Little Description TechStack Builder is a web application that helps developers explore different technologies and build their own personalized technology stack. Users can select technologies and easily manage their selected stack.

Technologies Used

React.js
TypeScript
Tailwind CSS
react toastify
JSON / API
3 Key Features

Explore Technologies — Browse different technologies and their details.
Build Your Stack — Add technologies to create a personalized tech stack.
Manage Your Stack — Remove technologies from the stack and update the selection easily.
React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes the React code easier to read, write, and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.
**State** is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it?

The `useState` hook is used to store and update data in a React component. I used it to manage the selected technologies and update my technology stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs code after a component renders or when specific data changes. I used it to load the technology data from the JSON file when the component was loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update, add, or remove items from the list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show a message when no technology is selected in the stack.

### 7. How do you pass data from a parent to a child, and how does a child send something back?

We pass data from a parent to a child using **props**. To send data back, the parent can pass a function to the child, and the child can call that function with the required data.
