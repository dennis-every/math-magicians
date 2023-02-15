import './Calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});

  function handleClick(e) {
    const { name } = e.target;
    setCalculatorObj(calculate(calculatorObj, name));
  }

  let result;

  if (calculatorObj.next) {
    result = calculatorObj.next;
  } else if (calculatorObj.total) {
    result = calculatorObj.total;
  } else {
    result = 0;
  }

  return (
    <section id="calculator">
      <table>
        <tbody>
          <tr className="result">
            <td>{result}</td>
          </tr>
          <tr className="buttons-wrap">
            <td><button onClick={handleClick} name="AC" className="gray" type="button">AC</button></td>
            <td><button onClick={handleClick} name="+/-" className="gray" type="button">+/-</button></td>
            <td><button onClick={handleClick} name="%" className="gray" type="button">%</button></td>
            <td><button onClick={handleClick} name="÷" className="orange" type="button">÷</button></td>
          </tr>
          <tr className="buttons-wrap">
            <td><button onClick={handleClick} name="7" className="gray" type="button">7</button></td>
            <td><button onClick={handleClick} name="8" className="gray" type="button">8</button></td>
            <td><button onClick={handleClick} name="9" className="gray" type="button">9</button></td>
            <td><button onClick={handleClick} name="x" className="orange" type="button">x</button></td>
          </tr>
          <tr className="buttons-wrap">
            <td><button onClick={handleClick} name="4" className="gray" type="button">4</button></td>
            <td><button onClick={handleClick} name="5" className="gray" type="button">5</button></td>
            <td><button onClick={handleClick} name="6" className="gray" type="button">6</button></td>
            <td><button onClick={handleClick} name="-" className="orange" type="button">-</button></td>
          </tr>
          <tr className="buttons-wrap">
            <td><button onClick={handleClick} name="1" className="gray" type="button">1</button></td>
            <td><button onClick={handleClick} name="2" className="gray" type="button">2</button></td>
            <td><button onClick={handleClick} name="3" className="gray" type="button">3</button></td>
            <td><button onClick={handleClick} name="+" className="orange" type="button">+</button></td>
          </tr>
          <tr className="last-buttons-wrap">
            <td><button onClick={handleClick} name="0" className="gray" type="button">0</button></td>
            <td><button onClick={handleClick} name="." className="gray" type="button">.</button></td>
            <td><button onClick={handleClick} name="=" className="orange" type="button">=</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
