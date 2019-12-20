import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Inside Out fitness app</h1>
        <div>
          <a href="/">Login</a> | <a href="/">Signup</a>
        </div>
      </header>
      <section>
        <h2>Healthy Recipes</h2>
        <div className="recipes">
          <a href="/">
            <figure>
              <img src="https://www.fillmurray.com/150/150" alt="Quinoa and Kale Salad"/>
              <figcaption>Quinoa and Kale Salad</figcaption>
            </figure>
          </a>
          <a href="/">
            <figure>
              <img src="https://www.fillmurray.com/150/150" alt="Chicken Tikka Masala"/>
              <figcaption>Chicken Tikka Masala</figcaption>
            </figure>
          </a>
          <a href="/">
            <figure>
              <img src="https://www.fillmurray.com/150/150" alt="Creamy Broccoli with Cheddar and Herbs"/>
              <figcaption>Creamy Broccoli with Cheddar and Herbs</figcaption>
            </figure>
          </a>
        </div>
      </section>
      <section>
        <h2>Exercises</h2>
        <div className="exercises">
          <a href="/">
            <figure>
              <img src="https://www.fillmurray.com/150/150" alt="Incline Bench Press"/>
              <figcaption>Incline Bench Press</figcaption>
            </figure>
          </a>
          <a href="/">
            <figure>
              <img src="https://www.fillmurray.com/150/150" alt="Romanian Deadlift"/>
              <figcaption>Romanian Deadlift</figcaption>
            </figure>
          </a>
          <a href="/">
            <figure>
              <img src="https://www.fillmurray.com/150/150" alt="Overhead Tricep Extension"/>
              <figcaption>Overhead Tricep Extension</figcaption>
            </figure>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
