

const HexaGird = () => {

    const HexaGenerator = () => {
        let HexaVal = ""
        let str = "1234567890abcdef"
        for(let i=0; i<6; i++ ){
            let index = Math.floor(Math.random() * str.length)
            HexaVal += str[index]
        }
        return "#" + HexaVal
    }

    
    // Define your array of values (e.g., an array of 32 elements)
    const array = Array.from({ length: 32 }, _ => HexaGenerator());

  return (
    <div>
        <div className="grid grid-cols-8 mt-4">
            {
            array.map( (color, i) => 
             <div key={i} 
            className={`p-5 border hover:scale-[1.1] text-white rounded font-Rajdhani transition`}
            style={{background: `${color}`}}
             >
            {color}
            </div> )
            }
        </div>
    </div>
  )
}


export default HexaGird