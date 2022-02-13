import React , {useState} from 'react'
import image1 from "../images/dark.png"
import image2 from "../images/bright.png"

const Bulb = () => {
let [bulb , setBulb] = useState(image1)

const Bulbon = () => {
  bulb === image1 ? setBulb (image2) : setBulb (image2)
}
const Bulboff = () => {
  bulb === image2 ? setBulb (image1) : setBulb (image1)
} 

return (
  <>
  
   <img src={bulb} alt="" width="50%" onMouseOver={Bulbon} onMouseOut={Bulboff}/>
   

  </>
)
}

export default Bulb
