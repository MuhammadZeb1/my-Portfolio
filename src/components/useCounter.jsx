import React, { useState } from 'react'

function useCounter() {
    const [count,setcount] = useState(0)

    const handle = ()=>{
        setcount((prev)=> prev + 1)
    }
    const handled = ()=>{
        setcount((prev)=> prev -1)
    }
  return {
    count,handle,handled
  }
}

export default useCounter