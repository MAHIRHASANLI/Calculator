import React, { useState } from 'react'

const Calculate = () => {
    const [inputValue, setInpuValue]  = useState('');
   const handleClick = (e)=>{
    if(e.target.value === 'AC'){
        setInpuValue('')
    }else if(e.target.value === 'DEL'){
        setInpuValue(inputValue.slice(0, inputValue.length - 1))
    }else if(e.target.value === '='){
        try {
            setInpuValue(eval(inputValue).toString())
        } catch (error) {
            setInpuValue('Error')
        }
    }else{
    setInpuValue(inputValue.concat(e.target.value))
    }
   }
  return (
    <div className='calculator'>
          <form action="">
             <input type="text" defaultValue={inputValue} placeholder='0'/>
         </form>       
         <div>
            <button onClick={(e)=>handleClick(e)} value="AC" className='operator'>AC</button>
            <button onClick={(e)=>handleClick(e)} value="DEL" className='operator'>DEL</button>
            <button onClick={(e)=>handleClick(e)} value="%" className='operator'>%</button>
            <button onClick={(e)=>handleClick(e)} value="/" className='operator'>/</button>
        </div>
        <div>
            <button onClick={(e)=>handleClick(e)} value="7">7</button>
            <button onClick={(e)=>handleClick(e)} value="8">8</button>
            <button onClick={(e)=>handleClick(e)} value="9">9</button>
            <button onClick={(e)=>handleClick(e)} value="*" className='operator'>*</button>
        </div>
        <div>
            <button onClick={(e)=>handleClick(e)} value="4">4</button>
            <button onClick={(e)=>handleClick(e)} value="5">5</button>
            <button onClick={(e)=>handleClick(e)} value="6">6</button>
            <button onClick={(e)=>handleClick(e)} value="-" className='operator'>-</button>
        </div>
        <div>
            <button onClick={(e)=>handleClick(e)} value="1">1</button>
            <button onClick={(e)=>handleClick(e)} value="2">2</button>
            <button onClick={(e)=>handleClick(e)} value="3">3</button>
            <button onClick={(e)=>handleClick(e)} value="+" className='operator'>+</button>
        </div>
        <div>
            <button onClick={(e)=>handleClick(e)} value="00">00</button>
            <button onClick={(e)=>handleClick(e)} value="0">0</button>
            <button onClick={(e)=>handleClick(e)} value=".">.</button>
            <button onClick={(e)=>handleClick(e)} value="=" className='equalBtn'>=</button>
        </div>
    </div>
  )
}

export default Calculate