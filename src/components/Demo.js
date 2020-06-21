import React, { useState } from 'react'

export const  Demo = ()=>{
    const [count, setCount] = useState(55);
    return(
        <div>
            <p> You Clicked { count } time </p>
            <button onClick={()=>setCount(count + 4)}>Touch Button </button>
         </div>
    )
}


()=>{}

function a(){
    return(
        ninty
    )
}



// import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div> 
//   );
// }
