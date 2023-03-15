import './Calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

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
            <td><Button onClick={(e) => handleClick(e)} name="AC" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="+/-" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="%" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="÷" className="orange" /></td>
          </tr>
          <tr className="buttons-wrap">
            <td><Button onClick={(e) => handleClick(e)} name="7" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="8" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="9" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="x" className="orange" /></td>
          </tr>
          <tr className="buttons-wrap">
            <td><Button onClick={(e) => handleClick(e)} name="4" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="5" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="6" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="-" className="orange" /></td>
          </tr>
          <tr className="buttons-wrap">
            <td><Button onClick={(e) => handleClick(e)} name="1" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="2" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="3" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="+" className="orange" /></td>
          </tr>
          <tr className="last-buttons-wrap">
            <td><Button onClick={(e) => handleClick(e)} name="0" className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="." className="gray" /></td>
            <td><Button onClick={(e) => handleClick(e)} name="=" className="orange" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
