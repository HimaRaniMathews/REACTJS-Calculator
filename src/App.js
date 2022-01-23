import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [expression, setExpression] = useState("");
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
  };

  const [answer, setAnswer] = useState(0);
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setAnswer(eval(expression));
  };

  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };
  const allClear = () => {
    setExpression("0");
    setAnswer("0");
  };

  return (
    <div className="container">
      

      <div className="grid">
        <div className="output">
          <input
            className="previousOutput"
            value={expression}
            placeholder="0"
            disabled
          />
          <div className="total">{answer}</div>
        </div>
        <button onClick={allClear} className="inner-grid AC">
          AC
        </button>
        <button onClick={clear} className="inner-grid C">
          c
        </button>
        <button onClick={() => display("/")} className="inner-grid ">
          ÷
        </button>
        <button onClick={() => display("7")} className="inner-grid ">
          7
        </button>
        <button onClick={() => display("8")} className="inner-grid ">
          8
        </button>
        <button onClick={() => display("9")} className="inner-grid ">
          9
        </button>
        <button onClick={() => display("*")} className="inner-grid ">
          *
        </button>
        <button onClick={() => display("4")} className="inner-grid ">
          4
        </button>
        <button onClick={() => display("5")} className="inner-grid ">
          5
        </button>
        <button onClick={() => display("6")} className="inner-grid ">
          6
        </button>
        <button onClick={() => display("-")} className="inner-grid ">
          -
        </button>
        <button onClick={() => display("1")} className="inner-grid ">
          1
        </button>
        <button onClick={() => display("2")} className="inner-grid ">
          2
        </button>
        <button onClick={() => display("3")} className="inner-grid ">
          3
        </button>
        <button onClick={() => display("+")} className="inner-grid ">
          +
        </button>
        <button onClick={() => display(".")} className="inner-grid ">
          .
        </button>
        <button onClick={() => display("0")} className="inner-grid ">
          0
        </button>
        <button onClick={calculate} className="inner-grid equal">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
