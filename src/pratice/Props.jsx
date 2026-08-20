import React, { useState } from 'react'

function Props() {
  const [toogel, settoogle]= useState(false)
  const [select,setselect]= useState(null)

  const info = [
    {name:"ali", fathername:"aur"},
    {name:"alj", fathername:"a"},
    {name:"ali", fathername:"ajzshdur"},
  ]
  // const [show, setshow] = useState(false)

  const handle = (index)=>{
    settoogle(!toogel)
    setselect(select === index ? null:index)
    console.log(toogel)
  }
      
  return (
    <>
    
    <div className='h-screen flex justify-center align-middle items-center border border-blue-400'>
      <ul className=' flex flex-col text-center w-[30%] justify- align-middle items-center border border-blue-400'>
      {
      info.map((person, index)=>(
        <>
       <div className='flex gap-3.5'>
         <li>{person.name}</li>
        <button
        onClick={(e)=> handle(index)}
        className='bg-amber-400 rounded-xs w-[50px]'>{select === index ?"hide":"show"}</button>
        {
          toogel && (
            <>
            {person.fathername}
            </>
          )
        }
       </div>
        </>
      ))
    }
    </ul>
    </div>
    </>
      
  )
}

export default Props