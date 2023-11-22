import { useState } from "react";

import "./App.css";

function App() {
   // controls value of screen top values
   const [value, setValue] = useState("");
   // controls values of 2nd input screen (2nd from top)
   const [inputValue, setInputValue] = useState("");
   //  controls value of arithmetic operator
   const [operator, setOperator] = useState("");

   const handleNumbersClick = (e) => {
      if (
         // prevent fro spamming 0 or .
         (e.target.innerText === "0" && inputValue === "0") ||
         (e.target.innerText === "." && inputValue.includes("."))
      )
         return;
      // after operator is clicked, pass
      if (operator) setInputValue(e.target.innerText);

      setInputValue(inputValue + e.target.innerText);
   };

   const handleSymbolClick = (e) => {
      // if value exist add operator next to value
      if (value) {
         setOperator(e.target.innerText);
      }
      // prevent for spamming symbols
      if (!operator && inputValue === "") return;

      if (operator) setOperator(e.target.innerText);

      if (!operator) {
         setValue(inputValue);
         setOperator(e.target.innerText);
         setInputValue("");
      }

      // check if values exists and operator is pressed, then return result
      if (value && inputValue) {
         handleResult();
         setOperator(e.target.innerText);
      }
   };

   const handleAllClear = () => {
      setValue("");
      setInputValue("");
      setOperator("");
   };

   const handleDel = () => {
      setInputValue(inputValue.slice(0, -1));
   };

   // add
   let add = (x, y) => {
      setValue(x + y);
      setOperator("");
      setInputValue("");
   };
   // subtract
   let subtract = (x, y) => {
      setValue(x - y);
      setOperator("");
      setInputValue("");
   };
   // multiply
   let multiply = (x, y) => {
      let sum = x * y;
      if (sum % 1 === 0) {
         setValue(sum);
      } else {
         setValue(Math.round(sum * 10000) / 10000);
      }
      setOperator("");
      setInputValue("");
   };
   // divide
   let divide = (x, y) => {
      if (y === 0) {
         setValue(0);
         setOperator("");
      }
      let sum = x / y;
      if (sum % 1 === 0) {
         setValue(sum);
      } else {
         setValue(Math.round(sum * 10000) / 10000);
      }
      setOperator("");
      setInputValue("");
   };

   const handleResult = () => {
      if (value === "") {
         return;
      }

      let x = +value;
      let y = +inputValue;

      switch (operator) {
         case "+":
            return add(x, y);
         case "-":
            return subtract(x, y);
         case "×":
            return multiply(x, y);
         case "÷":
            return divide(x, y);
         default:
            return null;
      }
   };

   return (
      <div className="main mt-12 border rounded-xl w-80 mx-auto flex flex-col shadow-lg bg-slate-50">
         <div className="top h-36 border rounded-md m-2 bg-white flex flex-col divide-y ">
            <div className="top-screen h-3/5 w-full text-4xl p-2 inline-flex justify-end items-end overflow-x-auto">
               {value}
               {value ? operator : null}
            </div>
            <div className="bottom-screen h-2/5 w-full text-3xl p-2 inline-flex justify-end items-end overflow-x-auto text-gray-600">
               {inputValue}
            </div>
         </div>
         <div className="bottom h-72 rounded-md m-2 min-w-fit flex">
            <div className="left-kb min-w-fit min-h-full w-full grid grid-cols-4 grid-rows-5 gap-1">
               <button
                  className="col-span-2 border rounded-md  bg-rose-50 hover:font-semibold hover:shadow-inner"
                  onClick={handleAllClear}
               >
                  AC
               </button>
               <button
                  className="border rounded-md bg-amber-100 hover:font-semibold hover:shadow-inner"
                  onClick={handleDel}
               >
                  DEL
               </button>

               <button
                  className="border rounded-md bg-sky-100 hover:font-semibold hover:shadow-inner"
                  onClick={handleSymbolClick}
               >
                  ÷
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  7
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  8
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  9
               </button>
               <button
                  className="border rounded-md  bg-sky-100 hover:font-semibold hover:shadow-inner"
                  onClick={handleSymbolClick}
               >
                  ×
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  4
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  5
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  6
               </button>
               <button
                  className="border rounded-md  bg-sky-100 hover:font-semibold"
                  onClick={handleSymbolClick}
               >
                  -
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  1
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  2
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  3
               </button>
               <button
                  className="border rounded-md  bg-sky-100 hover:font-semibold hover:shadow-inner"
                  onClick={handleSymbolClick}
               >
                  +
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  0
               </button>
               <button
                  className="border rounded-md hover:font-semibold bg-white hover:shadow-inner"
                  onClick={handleNumbersClick}
               >
                  .
               </button>
               <button
                  className="col-span-2 border rounded-md bg-sky-200 hover:font-semibold hover:shadow-inner"
                  onClick={handleResult}
               >
                  =
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
