const questions = [
  {
    "question": "What is ReactJS?",
    options: [
      { "optionA": 0, text: "Server-side framework"},
      { "optionB": 1, text: "User interface framework"},
      { "optionC": 2, text: "both a and b" },
      { "optionD": 3, text: "none of the above",  },
    ],
    answer: 2
  },

  {
    "question": "What is JSX in React?",
    options: [
      { "optionA": 0, text: "JavaScript XML" },
      { "optionB": 1, text: "Java Syntax Extension"},
      { "optionC": 2, text: "JavaScript Extension" },
      { "optionD": 3, text: "Java XML" },
    ],
    answer: 0
  },
  {
    "question": "What is the purpose of 'setState' in React?",
    options: [  
      { "optionA": 0, text: " To update the component's state" },
      { "optionB": 1, text: "To set the initial state of a component"},
      { "optionC": 2, text: "To fetch data from an API" },
      { "optionD": 3, text: " To declare a constant" },
    ],
    answer : 0
  },
  
  {
    "question": "What is the significance of the virtual DOM in React?",
    options: [
      { "optionA": 0, text: "It improves the performance" },
      { "optionB": 1, text: "It is used for styling components"},
      { "optionC": 2, text: " It is an alternative to state management" },
      { "optionD": 3, text: "It is used for server-side rendering" },
    ],
    answer:0
  },
  {
    "question": "What is a React component lifecycle method used for cleanup?",
    options: [
      { "optionA": 0, text: "componentDidMount" },
      { "optionB": 1, text: "componentWillUnmount"},
      { "optionC": 2, text: "componentDidUpdate" },
      { "optionD": 3, text: "componentWillUpdate" },
    ],
    answer:1
  },
  {
    "question": "What is the purpose of React's 'useMemo' hook?",
    options: [
      { "optionA": 0, text: "To memoize functions and optimize performance" },
      { "optionB": 1, text: "To manage component lifecycle events" },
      { "optionC": 2, text: "To handle asynchronous operations" },
      { "optionD": 3, text: "To create reusable components" },
    ],
    answer: 0
  },
  {
    "question": "Explain the concept of 'lifting state up' in React and provide an example scenario where it is beneficial.",
    options: [
      { "optionA": 0, text: "Managing global state in a Redux store" },
      { "optionB": 1, text: "Passing data from child to parent components" },
      { "optionC": 2, text: "Handling local component state" },
      { "optionD": 3, text: "Implementing controlled components" },
    ],
    answer: 1
  },
  
  {
    "question": "What is the difference between controlled and uncontrolled components in React forms?",
    options: [
      { "optionA": 0, text: "Controlled components are faster than uncontrolled components" },
      { "optionB": 1, text: "Uncontrolled components are easier to manage" },
      { "optionC": 2, text: "Controlled components store form data in the DOM" },
      { "optionD": 3, text: "Uncontrolled components rely on the internal component state" },
    ],
    answer: 2
  },

  {
    "question": "Explain the use of the 'key' prop in React lists and why it is important.",
    options: [
      { "optionA": 0, text: "It is used for styling list items" },
      { "optionB": 1, text: "It is required for conditional rendering" },
      { "optionC": 2, text: "It helps React identify which items have changed, added, or removed" },
      { "optionD": 3, text: "It is used to set the initial state of list items" },
    ],
    answer: 2
  },

  {
    "question": "What are React Hooks, and how do they differ from class components?",
    options: [
      { "optionA": 0, text: "Hooks are used for styling, while class components are used for logic" },
      { "optionB": 1, text: "Hooks are a way to use state and other React features in functional components" },
      { "optionC": 2, text: "Class components are deprecated, and hooks are the modern replacement" },
      { "optionD": 3, text: "Class components are used for asynchronous operations, while hooks are for synchronous" },
    ],
    answer: 1
  },

  {
    "question": "What is the purpose of React's 'Portals' and provide an example of a use case for portals.",
    options: [
      { "optionA": 0, text: "Portals are used for navigation between different pages in a React app" },
      { "optionB": 1, text: "Portals are used for rendering child components outside the DOM of the parent component" },
      { "optionC": 2, text: "Portals are a replacement for React Router" },
      { "optionD": 3, text: "Portals are used for managing state in React components" },
    ],
    answer: 1
  },
  {
    "question": "Explain the concept of 'Higher-Order Components (HOC)' in React and provide a use case for using HOCs.",
    options: [
      { "optionA": 0, text: "HOCs are used for styling components" },
      { "optionB": 1, text: "HOCs are functions that take a component and return a new component with functionality" },
      { "optionC": 2, text: "HOCs are used for handling asynchronous operations in React" },
      { "optionD": 3, text: "HOCs are a replacement for React hooks" },
    ],
    answer: 1
  },
  {
    "question": "What are React Fragments, and why are they useful?",
    options: [
      { "optionA": 0, text: "Fragments are used for conditional rendering in React" },
      { "optionB": 1, text: "Fragments are a way to group multiple children without adding extra nodes to the DOM" },
      { "optionC": 2, text: "Fragments are a replacement for React components" },
      { "optionD": 3, text: "Fragments are used for handling global state in React" },
    ],
    answer: 1
  },

  {
    "question": "What is the significance of the 'React.memo' function in functional components?",
    options: [
      { "optionA": 0, text: "It is used for memoizing functions in React" },
      { "optionB": 1, text: "It is used for optimizing the performance of functional components by memoizing the result" },
      { "optionC": 2, text: "It is used for creating higher-order components in React" },
      { "optionD": 3, text: "It is used for managing local component state" },
    ],
    answer: 1
  },
  {
    "question": "What is the purpose of the 'useEffect' hook in React?",
    "options": [
      { "optionA": 0, "text": "To handle component rendering" },
      { "optionB": 1, "text": "To manage side effects in functional components" },
      { "optionC": 2, "text": "To define initial state in functional components" },
      { "optionD": 3, "text": "To create custom hooks in React" },
    ],
    "answer": 1
  },
];

export default questions;