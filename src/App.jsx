import { Navbar, Meme } from './components'

function App() {
  
  return (
    <div className='font-karla'>
      <div className="gradient-purple">
        <Navbar />
      </div>
      <div className="max-w-[800px] mx-auto p-[36px] flex flex-col gap-[36px]">
        <Meme />
      </div>
    </div>
  )
}

export default App
