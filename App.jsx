import { useEffect, useState } from 'react'


function App() {
  const[car, setCar] = useState("");

  useEffect(() =>{
    fetch(`/api`)
    .then(response => response.json()
  ) .then(data => {
    setCar(data)
  })
  } ,[])
  return (
    <div className='main-container'>
      {(typeof car.carBrands === "undefined") ?
        (<h3>Loading Data...</h3>) : (car.carBrands.map((user, i) => (
          <h2 key={i}>{user}</h2>
        )))

      }
    </div>
  )
}

export default App
