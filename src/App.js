import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import * as math from "mathjs";


const App = () => {

  const [text,settext] = useState("")
  const [result,setresult] = useState("")


  // function to add input to UI
  const addtotext = (value) => {
    settext((text) => [...text, value + " "]);
  };
 
  // fucntion to clear the entered input
  const cleartext = () =>{
    setresult("");
    settext("");
  };

  // calculate the result
  const calresult = () =>{
      const input = text.join("")
      setresult(math.evaluate(input));
  };
  

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7"  handleclick={addtotext}/>
          <Button symbol="8" handleclick={addtotext}/>
          <Button symbol="9" handleclick={addtotext}/>
          <Button symbol="/"  handleclick={addtotext} color="#f2a33c"/>
        </div>
        <div className="row">
          <Button symbol="4" handleclick={addtotext}/>
          <Button symbol="5" handleclick={addtotext}/>
          <Button symbol="6" handleclick={addtotext}/>
          <Button symbol="*" handleclick={addtotext} color="#f2a33c"/>
        </div>
        <div className="row">
          <Button symbol="1" handleclick={addtotext}/>
          <Button symbol="2" handleclick={addtotext}/>
          <Button symbol="3" handleclick={addtotext}/>
          <Button symbol="+" handleclick={addtotext} color="#f2a33c"/>
        </div>
        <div className="row">
          <Button symbol="0" handleclick={addtotext}/>
          <Button symbol="." handleclick={addtotext}/>
          <Button symbol="=" handleclick={calresult} />
          <Button symbol="-" handleclick={addtotext} color="#f2a33c"/>
        </div>
        <Button symbol="CLEAR"  color= "red" handleclick={cleartext}/>

      </div>
    </div>
  );
}

export default App;
