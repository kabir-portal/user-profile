import { useEffect, useState } from "react"

function Clock() {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    const [show,setShow]=useState(true)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }

    },[])

return (
  <div className="flex items-center gap-3">
      
      <button
        onClick={() => setShow(!show)}
        className={`rounded-md px-3 py-2 text-sm font-medium text-white transition 
        ${show ? "bg-rose-500 hover:bg-rose-600" : "bg-emerald-500 hover:bg-emerald-600"}`}
      >
        {show ? "Hide Time" : "Show Time"}
      </button>

      {show && (
        <div className="text-right">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Current Time</p>
          <h1 className="mt-1 text-xl font-bold text-slate-800">
            {time}
          </h1>
        </div>
      )}

  </div>
);
}

export default Clock
