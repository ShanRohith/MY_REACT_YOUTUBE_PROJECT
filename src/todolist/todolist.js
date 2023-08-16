import { useState } from "react"


const Todolist = () => {
    const [value,setValue] = useState("")

    
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
    
  return (
    
    <>
      <input type="text" placeholder="Enter value" onChange={(e)=>handleChange(e)} value={value}></input>
      <button>hiii</button>
      {/* <button onClick={()=>handleClick(value)}>ADD</button> */}
    </>
  )
}

export default Todolist