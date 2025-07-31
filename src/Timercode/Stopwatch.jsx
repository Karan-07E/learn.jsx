import { useState, useEffect } from 'react'

const Stopwatch = () => {
    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const second = String(Math.floor(seconds % 60)).padStart(2, '0');

        return `${hours} : ${minutes} : ${second}`;
    }

    const [seconds, setseconds] = useState(0);
    const [isActive, setisActive] = useState(false);

    useEffect(() => {
        let interval;

        if(isActive){
            interval = setInterval(() => {
                setseconds(prev => prev + 1);
            }, 1000);
        }
        else if(!isActive && seconds !== 0){
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };

    }, [seconds, isActive]);

    const start = () => {
        setisActive(true);
    }

    const stop = () => {
        setisActive(false);
    }

    const reset = () => {
        setseconds(0);
        setisActive(false);
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
      <h1 className="text-5xl font-mono">{formatTime(seconds)}</h1>
      <div className="space-x-4">
        <button
          onClick={start}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch;