import { useState } from "react";

import "./App.css";

function App() {
   // forward numbers values from keys of calc
   const [numberKey, setNumberKey] = useState("");
   // controls value of screen top values
   const [value, setValue] = useState("");
   //  controls value of arithmetic operator
   const [operator, setOperator] = useState("");

   const handleNumbersClick = (e) => {
      if (operator) {
         setNumberKey(e.target.innerText);
         setOperator("");
      }
      if (!operator) setNumberKey(numberKey + e.target.innerText);
   };

   const handleSymbolClick = (e) => {
      setValue(numberKey + e.target.innerText);
      setOperator(e.target.innerText);
      setNumberKey("0");
   };

   return (
      <div className="main mt-12 border rounded-xl w-80 mx-auto flex flex-col shadow-lg bg-slate-50">
         <div className="top h-36 border rounded-md m-2 bg-white flex flex-col divide-y ">
            <div className="top-screen h-3/5 w-full text-4xl p-2 inline-flex justify-end items-end overflow-x-auto">
               {value}
            </div>
            <div className="bottom-screen h-2/5 w-full text-3xl p-2 inline-flex justify-end items-end overflow-x-auto">
               {numberKey}
            </div>
         </div>
         <div className="bottom h-72 rounded-md m-2 min-w-fit flex">
            <div className="left-kb min-w-fit min-h-full w-full grid grid-cols-4 grid-rows-5 gap-1">
               <button className=" border rounded-md bg-red-200 hover:font-semibold">
                  OFF
               </button>
               <button className=" border rounded-md  bg-amber-200 hover:font-semibold">
                  C
               </button>
               <button className="border rounded-md bg-amber-200 hover:font-semibold">
                  DEL
               </button>
               <button
                  className="border rounded-md bg-sky-300 hover:font-semibold"
                  onClick={handleSymbolClick}
               >
                  /
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  7
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  8
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  9
               </button>
               <button
                  className="border rounded-md  bg-sky-300 hover:font-semibold"
                  onClick={handleSymbolClick}
               >
                  x
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  4
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  5
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  6
               </button>
               <button
                  className="border rounded-md  bg-sky-300 hover:font-semibold"
                  onClick={handleSymbolClick}
               >
                  -
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  1
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  2
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  3
               </button>
               <button
                  className="border rounded-md  bg-sky-300 hover:font-semibold"
                  onClick={handleSymbolClick}
               >
                  +
               </button>
               <button
                  className="border rounded-md hover:font-semibold"
                  onClick={handleNumbersClick}
               >
                  0
               </button>
               <button className="border rounded-md hover:font-semibold">
                  .
               </button>
               <button className="col-span-2 border rounded-md bg-sky-500 hover:font-semibold">
                  =
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
