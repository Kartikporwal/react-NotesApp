import React, { useState } from 'react'

const App = () => {


   const [title,setTitle] = useState('');
   const [details,setDetails] = useState('');

   const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
   const copyTask = [...task];
   
   copyTask.push({title,details});

   setTask(copyTask);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
   const copyTask = [...task];

   copyTask.splice(idx,1)

   setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>

      <form onSubmit={submitHandler} className='p-10 flex flex-col lg:w-1/2 items-start gap-4'>
       <h1 className='text-4xl font-bold'>Add Notes</h1>

       {/* // pehla input heading */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='border-2 px-5 py-2 rounded w-full outline-none font-medium'
          value={title}
          onChange={(e)=> {
             setTitle(e.target.value);
          }}
        />

        {/* // deatiled input */}
        <textarea
          placeholder='Write Details here...'
          className='px-5 py-2 h-32 rounded border-2 w-full outline-none font-medium'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className='px-5 py-2 active:scale-95 rounded text-black bg-white w-full font-medium'>
          Add Notes
        </button>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-[90%]'>
        {task.map(function(elem,idx) {
          
          return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black pt-9 pb-4 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
             <div>
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-500 text-xs'>{elem.details}</p>
          </div>
          <button onClick={() => {
            deleteNote(idx)
          }} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete</button>
          </div>
        })} 
      </div>
      </div>
    </div>
  )
}

export default App