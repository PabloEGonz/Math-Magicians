import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Result from './Result';

export default function Calculator() {
  const [result, setResult] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleOnClick = (e) => {
    const button = e.target.innerText;
    setResult(calculate(result, button));
  };
  const res = result.total ? String(result.total) : '';
  const nxt = result.next ? result.next : '';
  const opr = result.operation ? result.operation : '';

  return (
    <div className="calculator" role="presentation" onClick={handleOnClick}>
      <Result total={res} next={nxt} operation={opr} />
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button className="opperation" type="button">÷</button>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <button className="opperation" type="button">x</button>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <button className="opperation minus" type="button">-</button>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <button className="opperation" type="button">+</button>
      <span className="zero">0</span>
      <span className="dot">.</span>
      <button className="opperation" type="button">=</button>
    </div>
  );
}
