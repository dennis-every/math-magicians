import './Calculator.scss';

function Calculator() {
  return (
    <section id="calculator">
      <table>
        <tbody>
          <tr className="result">
            <td>0</td>
          </tr>
          <tr className="buttons-wrap">
            <td><button className="gray" type="button">AC</button></td>
            <td><button className="gray" type="button">+/-</button></td>
            <td><button className="gray" type="button">%</button></td>
            <td><button className="orange" type="button">+</button></td>
          </tr>
          <tr className="buttons-wrap">
            <td><button className="gray" type="button">7</button></td>
            <td><button className="gray" type="button">8</button></td>
            <td><button className="gray" type="button">9</button></td>
            <td><button className="orange" type="button">x</button></td>
          </tr>
          <tr className="buttons-wrap">
            <td><button className="gray" type="button">4</button></td>
            <td><button className="gray" type="button">5</button></td>
            <td><button className="gray" type="button">6</button></td>
            <td><button className="orange" type="button">-</button></td>
          </tr>
          <tr className="buttons-wrap">
            <td><button className="gray" type="button">1</button></td>
            <td><button className="gray" type="button">2</button></td>
            <td><button className="gray" type="button">3</button></td>
            <td><button className="orange" type="button">+</button></td>
          </tr>
          <tr className="last-buttons-wrap">
            <td><button className="gray" type="button">0</button></td>
            <td><button className="gray" type="button">.</button></td>
            <td><button className="orange" type="button">=</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
