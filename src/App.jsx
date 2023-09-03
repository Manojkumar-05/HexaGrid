import HexaGird from "./components/HexaGird"

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center font-Rajdhani">
      <h1 className="font-bold text-5xl my-3">My 30 Days of React</h1>  
      <p className="font-extralight text-4xl my-4">Color Generator</p>  
      <HexaGird />
    </div>
  )
}

export default App 