# 🎯  React Hooks Playground   
Explore and learn the magic of  React Hooks  through hands-on examples! This project features a  Counter app  and a  custom data-fetching hook  to help you understand `useState` and `useEffect`.  

---

## 📋  Features   
- 🔢  Counter App : Manage state with `useState`.  
- 🔄  Custom Hook  (`useFetch`): Simplify API calls with reusable logic.  
- 🧩  Modular Structure : Organized folder layout for easy understanding.  
- ♻️  Reusable Code : Learn to create custom hooks for common logic.

---

## 🗂  Project Structure   

```
react-hooks-playground/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   ├── Counter.js      # Counter app using useState
│   │   └── FetchExample.js # Component using custom hook
│   ├── hooks/
│   │   └── useFetch.js     # Custom useFetch hook
│   ├── App.js              # Root component
│   ├── index.js            # Entry point for React
│   └── index.css           # Styling
├── package.json            # Project dependencies
└── README.md               # Documentation
```

---

## 🚀  Getting Started   

###  Prerequisites   
- 📥  Node.js  (v14+ recommended)  
- 💻  Code Editor  (VSCode or any preferred editor)  

###  Installation   

1.  Clone the repository :  
   ```bash
   git clone https://github.com/yourusername/react-hooks-playground.git
   ```
2.  Navigate to the project folder :  
   ```bash
   cd react-hooks-playground
   ```
3.  Install dependencies :  
   ```bash
   npm install
   ```
4.  Start the development server :  
   ```bash
   npm start
   ```

---

## 🛠  How to Use   

### 🔢  Counter App with `useState`   
Manage a counter state with the `useState` hook.

```javascript
// src/components/Counter.js

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
```

### 🌐  Custom Hook (`useFetch`) Example   
Fetch data from APIs using `useFetch`.

```javascript
// src/hooks/useFetch.js

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
```

 Usage Example:   
```javascript
// src/components/FetchExample.js

import React from 'react';
import useFetch from '../hooks/useFetch';

const FetchExample = () => {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.slice(0, 5).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchExample;
```

---

## 🌟  Why React Hooks?   

- 🔧  Simpler Code:  Functional components are easy to understand.  
- ♻️  Reusable Logic:  Custom hooks allow you to reuse logic across components.  
- 📦  Cleaner Syntax:  No need for `this` or class-based components.  
- 🔄  Side Effects:  Manage side effects with `useEffect` instead of lifecycle methods.

---

## 🌐  Live Demo & Code   

-  [Demo Coming Soon!](#)   
-  Download Code  from the [GitHub repository](https://github.com/dineshabey/react-hooks-examples.git).  

---

## 🤝  Contributing   

We welcome contributions! Follow these steps to contribute:

1.  Fork the repository .  
2.  Create a new branch :  
   ```bash
   git checkout -b feature-name
   ```
3.  Make changes and commit :  
   ```bash
   git commit -m "Add new feature"
   ```
4.  Push your branch :  
   ```bash
   git push origin feature-name
   ```
5.  Open a Pull Request .

---



---

## 📧  Contact  

👋 Hi, I'm Dinesh Abeysinghe

⚡ Got questions or feedback? Feel free to reach out!  
💻 Need software developed? Feel free to contact me to bring your ideas to life!

<div align="center">
<a href="https://www.linkedin.com/in/dinesh-abeysinghe-bb773293" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo" />
</a>

<a href="mailto:dinabeysinge@gmail.com" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo" />
</a>

<a href="https://huggingface.co/dineshabeysinghe" target="_blank">
    <img src="https://img.shields.io/static/v1?message=HuggingFace&logo=huggingface&label=&color=FFAA00&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="huggingface logo" />
</a>

<a href="https://www.linkedin.com/newsletters/7205635660026703872/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=FutureAIToday&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo" />
</a>

</div>

---

This README provides a complete overview of the project with code examples and contribution guidelines. Enjoy building with  React Hooks ! 🎉
