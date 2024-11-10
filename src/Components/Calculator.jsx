import React, { useState } from 'react';
import {   evaluate } from 'mathjs';
import style from './Calculator.module.css'

export default function Calculator() {

    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    const calculateResult = () => {
        try {
        setResult(evaluate(input))
        setInput('')
        

    } catch (error) {
        setResult('خطأ');
        setInput('')
    }
};


    function handelButtons(value) {
        setInput((prev) => prev + value);
        setResult('');
        
    }
    
    function handelClear() {
        setInput('')
        setResult('')
    }

  return<>
      <div className='text-center'>
          <div className={`${style.calculator}`}>
              <div className={`${style.input}`}>{ input || 0 }</div>
              <div className={`${style.result}`}>{result }</div>
              
              <div className={`${style.Allbuttons}`}>
                
                  <div className={`${style.buttons}`}>
                  <button className={``} onClick={()=>handelButtons('7')} >7</button>
                  <button className={``} onClick={()=>handelButtons('8')} >8</button>
                  <button className={``} onClick={()=>handelButtons('9')} >9</button>
                  
                  <button className={``} onClick={()=>handelButtons('4')} >4</button>
                  <button className={``} onClick={()=>handelButtons('5')} >5</button>
                      <button className={``} onClick={()=>handelButtons('6')} >6</button>
                      <button className={``} onClick={()=>handelButtons('1')} >1</button>
                      <button className={``} onClick={()=>handelButtons('2')} >2</button>
                      <button className={``} onClick={()=>handelButtons('3')} >3</button>
                      <button className={``} onClick={()=>handelButtons('.')} >.</button>
                      <button className={``} onClick={()=>handelButtons('0')} >0</button>
                      <button className={``} onClick={calculateResult}  >=</button>
                  </div>
                  <div className={`${style.operation}`}>
                      <button className={``} onClick={handelClear} >C</button>
                  <button className={``} onClick={()=>handelButtons('/')} >÷</button>
                  <button className={``} onClick={()=>handelButtons('*')} >×</button>
                  <button className={``} onClick={()=>handelButtons('-')} >-</button>
                  <button className={``} onClick={()=>handelButtons('+')} >+</button>
                  </div>
                  
                  
              </div>
          </div>
   </div>
  </>
}
