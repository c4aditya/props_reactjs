import Data from "./Data"

function App() {

  const passing_data = [
    {
      id : 1 ,
      name:"Aditya",
      age:23
    },
    {
      id : 2 ,
      name:"Roshan",
      age:26
    
    },
    {
      id : 3 ,
      name:"sumit",
      age:24
    
    },
    {
      id : 4 ,
      name:"xyz",
      age:21
    
    },
  ]


  return (
    <>
    {
      passing_data.map((data)=>
        <Data key={data.id} id ={data.id} name ={data.name} age ={data.age} />
      )
    }
  
    </>
  )
}

export default App
