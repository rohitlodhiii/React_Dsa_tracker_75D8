import React, { useState } from 'react'
import { Link, Router, Routes , Route } from 'react-router-dom'
import Status from './Status';
function Navbar({mode,setmode}) {

    const [hidden1, sethidden1] = useState("hidden");
    const handleClick = () => {
      mode=="light" ? setmode("dark") : setmode("light");
    }

     
    return (
    <div>
      <div className=' flex justify-between  bg-zinc-600 '>
        <div 
        className='text-gray-200 font-lg text-left hover:text-gray-200  m-3  h-8  '>

        
               <Link className='pl-2 font-large' to="/"  >DSA QUESTIONS</Link>
       {/* </Route>
       </Routes>
       </Router> */}
        
       
        </div>
        
      </div>
      
      </div>
  )
}

export default Navbar
