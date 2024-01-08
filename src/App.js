import Home from "./pages/Home";
import React from "react";
import {Routes,Route,Link} from "react-router-dom"
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>   {/*<a href="/">Home</a>*/}
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/input">Input</Link>
        <Link to="/input2">Input2</Link>
        <Link to="/list">List</Link>
      </nav>
      <Routes> {/** Route의 묶음 이라고 생각하면 됩니다. 
                 *Link to 에있는 값을 Route 에서 찾아서 매칭 해서  화면에 띄워 준다 라고 생각 하면 된다.*/ }
        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="counter" element={<Counter/>} />
        <Route path="input" element={<Input/>} />
        <Route path="input2" element={<Input2/>} />
        <Route path="list" element={<List/>} />
      </Routes>
    </div>
  );
}

export default App;
