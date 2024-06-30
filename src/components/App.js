
import React, { useState } from "react"
import './../styles/App.css';

const App = () => {
  const totalFruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

  let [fruits,setfruits] = useState(totalFruits);
  console.log(fruits);

  const showSuggestion= (e)=>{
    let filteredFruits = [];
    filteredFruits = totalFruits.filter((value)=>{
      return value.toLowerCase().includes(e.target.value);
    })
    setfruits(filteredFruits);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" onChange={(e)=>showSuggestion(e)}/>
        <ul>
          {      
            fruits.map((value,index)=>(
              <li key={index}>{value}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App