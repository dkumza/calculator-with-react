// import { useState } from "react";

import "./App.css";

function App() {
   //  const [count, setCount] = useState(0);

   return (
      <div className="main mt-12 border rounded-xl w-96 mx-auto flex flex-col shadow-lg bg-slate-50">
         <div className="top h-36 border rounded-md m-2 bg-white flex flex-col divide-y">
            <div className="top-screen h-3/5 w-full text-4xl p-2 inline-flex justify-end items-end">
               0
            </div>
            <div className="bottom-screen h-2/5 w-full text-3xl p-2 inline-flex justify-end items-end">
               0
            </div>
         </div>
         <div className="bottom h-72 rounded-md m-2 min-w-fit flex">
            <div className="left-kb min-w-fit min-h-full w-full grid grid-cols-4 grid-rows-5 gap-1">
               <button className=" border rounded-md bg-red-200">OFF</button>
               <button className=" border rounded-md  bg-amber-200">C</button>
               <button className="border rounded-md bg-amber-200">DEL</button>
               <button className="border rounded-md bg-sky-300">/</button>
               <button className="border rounded-md">7</button>
               <button className="border rounded-md">8</button>
               <button className="border rounded-md">9</button>
               <button className="border rounded-md  bg-sky-300">x</button>
               <button className="border rounded-md">4</button>
               <button className="border rounded-md">5</button>
               <button className="border rounded-md">6</button>
               <button className="border rounded-md  bg-sky-300">-</button>
               <button className="border rounded-md">1</button>
               <button className="border rounded-md">2</button>
               <button className="border rounded-md">3</button>
               <button className="border rounded-md  bg-sky-300">+</button>
               <button className="border rounded-md">0</button>
               <button className="border rounded-md">.</button>
               <button className="col-span-2 border rounded-md bg-sky-500">
                  =
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
