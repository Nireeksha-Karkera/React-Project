// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let [counter,setCounter] = useState(0)

//   // let counter=25

//   const addValue = () =>{
//     // console.log("clicked",counter)
//     // counter=counter + 1
//     setCounter(counter + 2)
    
//   }
// const removeValue =() =>{
//   setCounter(counter - 2)
// }

//   return (
//     <>
//     <h1>React</h1>
//     <h2>Counter value:{counter}</h2>

//     <button
//     onClick={addValue}
//     >Add value {counter}</button>
//     <br />
//     <button
//     onClick={removeValue}
//     >Remove value {counter}</button>
//     <p>footer:{counter}</p>
//     </>
//   )
// }

// export default App






import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counters, setCounters] = useState([0])

  function addCounter() {
    // const lastValue = counters[counters.length - 1] + 1
    // const updatedCounters = [...counters, lastValue]
    // setCounters(updatedCounters)

    setCounters(prev => [...prev, prev[prev.length - 1] + 1])
  }

  function removeCounter() {
    // const updatedCounters = [...counters]
    // updatedCounters.pop()
    // setCounters(updatedCounters)

    setCounters(prev => [...prev].splice(0, prev.length - 1))

  }

  // const [counter, setCounter] = useState(0)
  // const [oldCounterArray, setOldCounterArray] = useState([])
  // const [updatedCounterArray, setUpdatedCounterArray] = useState([])

  // const addValue = () =>{
  //   const updatedCounter = counter + 1;
  //   setCounter(updatedCounter);
  //   setOldCounterArray([...oldCounterArray, counter]);
  //   setUpdatedCounterArray([...updatedCounterArray, updatedCounter]);
  // }

  // const removeValue = () =>{
  //   // const updatedCounter = counter - 1;
  //   const oldarray=[...oldCounterArray]
  //   setOldCounterArray(oldarray);
  //   oldarray.pop()
  //   // setCounter(updatedCounter);
  //   setUpdatedCounterArray(oldarray);
  // }

  // return (
  //   <>
  //     <h1>React</h1>
  //     <h2>Counter value: {counter}</h2>

  //     <button onClick={addValue}>Add value {counter}</button>
  //     <br />
  //     <button onClick={removeValue}>Remove value {counter}</button>
      
  //     <div>
  //       <p>Old counter values: {oldCounterArray.join(', ')}</p>
  //       <p>Updated counter values: {updatedCounterArray.join(', ')}</p>
  //     </div>
  //     <p>footer: {counter}</p>
  //   </>
  // )


  return (
    <>
      <h1>React</h1>
      {/* <h2>Counter value: {counter}</h2> */}

      <button onClick={addCounter}>Add value {counters.length <= 0 ? '0' : counters[counters.length - 1] + 1}</button>
      <br />
      <button onClick={removeCounter}>Remove value {counters[counters.length - 1]}</button>
      <div>
        <p>Updated counter values: {counters.join(', ')}</p>
      </div>
    </>
  )
}

export default App







       
