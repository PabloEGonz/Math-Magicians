import React from 'react';

const Result = () => (
  <p className="result">0</p>
);

export default function Calculator() {
  return (
    <>

      <div className="calculator">
        <Result />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="opperation" type="button">÷</button>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <button className="opperation" type="button">X</button>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <button className="opperation" type="button">-</button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <button className="opperation" type="button">+</button>
        <span className="zero">0</span>
        <span>.</span>
        <button className="opperation" type="button">=</button>
      </div>
    </>

  );
}
