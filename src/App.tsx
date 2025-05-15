import react from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/lootiefiles/developeranimaton.json'
import workingdevanima from '../assets/lootiefiles/Webdeveloper.json'

function App() {

  return (
    <>
    <div className='flex flex-row align-items-center justify-content-evenly p-3'>
      <div className='bg-white'>
        <p className='m-0 p-2'> The data of developer</p>

      </div>

    <div className="w-60 h-70">
      <Lottie animationData={animationData} loop={true} />
    </div>
    </div>
    <div className='flex flex-row align-items-center justify-content-evenly p-3'>

    <div className="w-80 h-70">
      <Lottie animationData={workingdevanima} loop={true} />
    </div>
    </div>
 <div className="bgprimary">
  Tailwind is working!
</div>
<div className="bg-blue-400 text-white p-4">
  Bit Brown background
</div>

<div className="bg-blue-400 text-black p-4">
  Light gray background
</div>
    </>
  )
}

export default App
