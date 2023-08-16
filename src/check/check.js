import { useState } from "react"


const Check = () => {
    const [val,setVal] = useState("")    
    const handleChange =(e)=>{
        setVal(e.target.value)
    }
    
  return (    
    <>
      <input type="text" placeholder="Enter value" onChange={(e)=>handleChange(e)} value={val}>
      </input>
      <button>ADD</button>
      {/* <button onClick={()=>handleClick(value)}>ADD</button> */}
    </>
  )
}

export default Check