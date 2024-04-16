import { useState } from 'react';


export const Input = ({onSubmit}: any) => {

    const [input, setInput] = useState('')

    const handleSubmit = () => {
        if(!input) return;

        onSubmit(input);

        setInput('');
    }

    return (
        <div className='w-auto'>
          <input type="text"  value={input} onChange={e => setInput(e.target.value)} className="m-4 bg-white text-black p-5"/>
          <button className="m-4 bg-white text-black p-5" onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Input;