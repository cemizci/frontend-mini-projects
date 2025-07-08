import { useReducer } from "react";

const reducer = (state,action) => {
    switch (action.type) {
        case "ARTTIR":
            return {count : state.count + 1}
        case "AZALT":
            return{count: state.count - 1}    
        case "RESET":
            return{count: 0}
        default:
            return state;
    }
}

function ReducerCounter(){
    const [state,dispatch] = useReducer(reducer, { count: 0 })

     return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold my-4">{state.count}</h2>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "ARTTIR" })} className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">Arttır</button>
        <button onClick={() => dispatch({ type: "AZALT" })} className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded">Azalt</button>
        <button onClick={() => dispatch({ type: "RESET" })} className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default ReducerCounter;