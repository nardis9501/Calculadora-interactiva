import './App.css';
import './stylesheet/Boton.css'
import './stylesheet/Display.css'
import './stylesheet/BotonClear.css'
import Boton from './componentes/Boton';
import Display from './componentes/Display';
import freeCodeCampLogo from './imagenes/freecodecamp_logo.png'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { cube, evaluate, sqrt, square, cbrt, sign } from 'mathjs';

function App() {

   const [inputD, setInput] = useState(0);
   
   const addInput = val=> {
    if (inputD===0 & val!=='.') {
      
      setInput(val);
    }else {
      setInput(inputD + val);

    }

   };

   const calcResultado = () => {
    if (inputD) {
      setInput(evaluate(inputD));
    }
  };

  const Sqrt = () => {
    if (/* inputD[0]==='-' |  */sign(inputD)===-1) {
      setInput('undefined')
    } else {

      setInput(sqrt(inputD));
    }
  };
  
  const delet = () => {
    if (inputD!==0) {
      setInput(inputD.substring(0,inputD.length-1));
      console.log(sqrt(-64));
    }
   };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
      <img src={freeCodeCampLogo} alt="FreeCodeCamp logo" className="freecodecamp-logo" />
      </div>

      <div className="contenedor-calculadora">
          <Display input={inputD}/>
       

        <div className="fila">
          <BotonClear Clear={()=>setInput(0)}/>
          <Boton manejarClics={addInput}>%</Boton>
          <Boton manejarClics={Sqrt}>√</Boton>
          <Boton manejarClics={delet}>&#9003;</Boton>
        </div>
        
        <div className="fila">
          <Boton manejarClics={()=>setInput(square(inputD))}>x²</Boton>
          <Boton manejarClics={()=>setInput(cube(inputD))}>x³</Boton>
          <Boton manejarClics={()=>setInput(cbrt(inputD))}>∛</Boton>
          <Boton manejarClics={addInput}>/</Boton>
        </div>

        <div className="fila">
          <Boton manejarClics={addInput}>1</Boton>
          <Boton manejarClics={addInput}>2</Boton>
          <Boton manejarClics={addInput}>3</Boton>
          <Boton manejarClics={addInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClics={addInput}>4</Boton>
          <Boton manejarClics={addInput}>5</Boton>
          <Boton manejarClics={addInput}>6</Boton>
          <Boton manejarClics={addInput}>+</Boton>
        </div>
        
        <div className="fila">
          <Boton manejarClics={addInput}>7</Boton>
          <Boton manejarClics={addInput}>8</Boton>
          <Boton manejarClics={addInput}>9</Boton>
          <Boton manejarClics={addInput}>-</Boton>
        </div>
        
        <div className="fila">
          <Boton manejarClics={addInput}>00</Boton>
          <Boton manejarClics={addInput}>0</Boton>
          <Boton manejarClics={addInput}>.</Boton>
          <Boton manejarClics={calcResultado}>=</Boton>
        </div>

      </div>
    </div>
  );
}

export default App;
