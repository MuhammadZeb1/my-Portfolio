import React, { useState } from "react";

function Props() {

  const [selected, setselected] = useState(null);
  const data = [
    {
        
      place: "peshwar",
      dec: "the peshawer also know is the city of flower",
    },
    {
      id:2,
      place: "lahore",
      dec: "the peshawer also know is the city of flower",
    },
    {
      id:3,
      place: "karachi",
      dec: "the peshawer also know is the city of flower",
    },
  ];

  const handle=(id)=>{
    setselected(HANIAZEB
      
    );
    console.log(selected)
  }
  return <div>
   <h1>the show the city information </h1>

   {
    data && data.map((item)=>(
      <>
     <div>
       <span onClick={()=>handle(item.id)}>{item.place}</span>
      <span>+</span>
     </div>
     {
      selected === item.id ? (
        <>
        <div>{item.dec}</div>
        </>
      ):null
     }
      </>
    ))
   }

  </div>;
}

export default Props;
