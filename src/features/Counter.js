import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link} from "react-router-dom";
//counterSlice컴포넌트 import
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  decrementByAmount
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  //역할 - state selector 
  const count = useSelector(selectCount);
  //리덕스 dispatch '추가'
  const dispatch = useDispatch();
  //더하거나 뺄 수치 incrementAmount 'default = 2'  
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <h1>Redux - persist</h1>
      </div>
      <div className={styles.row}>
        <Link to="/test">
        <button className ={styles.button}>Login main</button>
        </Link>
      </div>
      <div className={styles.row}>
       
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(incrementValue))}
        >
          discount Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Async promise +
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          홀수일때 +
        </button>
        
      </div>
    </div>
  );
}
