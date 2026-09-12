Project Name : Dev Stack

Description : Dev Stack is a simple and interactive web application for exploring different development technologies. Users can browse technology information and build their own development stack by selecting the technologies they need.

Technologies Used :

1. React.js
2. JavaScript (ES6+)
3. Tailwind CSS
4. JSON
5. Vite
6. React-Toastify

Three features about my project :
1. Explore Technologies
Users can explore different development technologies with their names, logos, categories, and other useful information.

2. Build Your Own Stack
Users can select technologies and add them to their own development stack. They can also remove technologies when needed.

3. Responsive & Interactive Design
The website has a responsive user interface that works well on different screen sizes and provides an interactive experience.


React Questions and Answers :

1. What is JSX, and why is it used in React?

Ans: JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to create and understand.

2. What is the difference between props and state?

Ans: Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component.

3. What does the "useState" hook do, and where did you use it in this project?

Ans: "useState" is used to store and update data in a React component. I used it to manage the technologies selected in my stack.

4. What does the "useEffect" hook do, and why did you need it to load the JSON data?

Ans: "useEffect" is used to handle side effects in React. I used it to load the technology data from the JSON file when the application starts.

5. Why does every item in a ".map()" list need a unique "key" prop?

Ans: The "key" helps React identify each item in a list. It helps React update the list correctly when items change.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it to show an empty stack message when no technology is selected.

Example:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((item) => (
    <p key={item.id}>{item.name}</p>
  ))
)}
```


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: A parent component passes data to a child component using props. A child can send data back to the parent by calling a function passed through props.