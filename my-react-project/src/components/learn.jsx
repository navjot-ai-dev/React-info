import React from 'react'

const Learn = () => {
  return (
    
       <div>
       <section className="card">
        <h2>Something More about react</h2>

        <pre>
        {`
         React is a JavaScript library developed by Meta (formerly Facebook) and released in 2013.
         Since its release, it has become one of the most popular tools for building modern web 
         applications. It is used by some of the biggest companies in the world, 
         including Netflix, Airbnb, and Twitter, which speaks to its reliability and power.
            
         The core idea behind React is the concept of components. A component is a small, reusable piece of the user interface.
          Instead of building an entire webpage as one big block of code, React allows developers to break it down into 
          smaller, manageable pieces. Each component handles its own structure and logic, which makes the code easier to read,
           maintain, and reuse across different parts of an application.


         React uses something called JSX, which stands for JavaScript XML.
         JSX allows developers to write HTML-like code inside JavaScript, making it much easier to 
         visualize the structure of the UI while writing logic at the same time. Though it may look unusual at first, 
        JSX quickly becomes a natural and productive way to write React code.

        One of the most important features of React is its use of state and props. State is data that belongs to
         a component and can change over time. When the state changes, React automatically updates the UI to reflect those changes.
          Props, on the other hand, are used to pass data from one component to another, allowing components to
           communicate with each other.


        React also introduced Hooks, such as useState and useEffect, which allow developers
         to manage state and side effects inside functional components. This made React code simpler and cleaner
          compared to the older class-based approach.


        Another reason for React's popularity is its Virtual DOM. Instead of directly updating the real browser DOM every 
        time something changes, React first updates a virtual copy of the DOM and then efficiently applies only the necessary
         changes to the real DOM. This makes React applications very fast and smooth.


        Overall, React is a powerful, flexible, and beginner-friendly library that has transformed the way modern web 
        applications are built. Its component-based architecture, rich ecosystem, and strong community support make 
        it an excellent choice for any frontend developer.


        `}


        </pre>
      </section>
    </div>
  
  )
}

export default Learn
