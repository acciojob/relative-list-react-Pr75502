import React from 'react'

const App = () => {
  const relatives = ["Alice", "Bob", "Charlie"]
  return (
   
    <div id="main">
      <ol key="relativeList">
        {relatives.map((item, index) => (
          <li key={`relativeListItem${index + 1}`}>{item}</li>
        ))}

          
      

      </ol>
      
    </div>
  )
}

export default App
