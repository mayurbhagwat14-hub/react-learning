import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            //onclick ko hamesha function he chai ya voh function he expect karta hai
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setcolor("black")}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
