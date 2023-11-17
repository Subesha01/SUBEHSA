import "./App.css";
/*import logo from "./logo.svg";
import "./App.css";
import NavBar from "./day2/NavBar";
import Main from "./day2/Main";
import Footer from "./day2/Footer";
function App() {
  return (
    <div>
    <NavBar/>
    <Main/>
    <Footer/>
    </div>
    );
    }
    
    export default App;*/

/*import Counter from "./day3/Counter";
function App() {
  return (
    <div className="flex space-x-4 my-4">
    <Counter />
    </div>
    );
  }
  
  export default App;*/

 /* import { useState } from "react";
  import Cart from "./day3/CoffeeShop/Cart";
  import Menu from "./day3/CoffeeShop/Menu";
  import Navbar from "./day3/CoffeeShop/Navbar";
  import categories from "./day3/CoffeeShop/Product";
  function App() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [products, setProducts] = useState([]);
    const handleClick = (index) => {
      setActiveCategory(categories[index]);
    };
    const handleAddToCart = (item) => {
      setProducts([...products, item]);
    };
    return (
      <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
      </div>
      );
    }
    export default App;*/
    
    /*import InlineStyle from "./day2/InlineStyle";
    function App() {
      return (
       <div className="flex space-x-4 my-4">
        <InlineStyle />
        </div>
        );
      }
      
      export default App;*/

    /*import HelloWorld from "./day2/HelloWorld";
    function App() {
      return (
       <div>
        <HelloWorld />
        </div>
        );
      }
      
      export default App;*/

    /*import Menu from "./Components/Menu";
    function App() {
      return (
       <div>
        <Menu />
        
        </div>
        );
      }
      
      export default App;*/

   /*import React from 'react';
import GokuTransformation from "./day3/GokuTransformation";
function App() {
  return (
    <div>
      <GokuTransformation />
    </div>
  );
}

export default App;*/

/*import React from 'react';
import ToggleMessage from "./day3/ToggleMessage";
function App() {
  return (
    <div>
      <h1>Toggle Message Example</h1>
      <ToggleMessage />
    </div>
  );
}
export default App;*/

/*import React from 'react';
import FruitSurvey from "./day4/FruitSurvey";
function App() {
  return (
    <div>
      <h1>Student Greeting Form</h1>
      <FruitSurvey />
    </div>
  );
}
export default App;*/

import React from 'react';
import MaterialButton from './day4/LoginButton';
function App() {
  return (
    <div>
      <h1>React Mateirial-UI Login Example</h1>
      <MaterialButton />
    </div>
  );
}
export default App;
