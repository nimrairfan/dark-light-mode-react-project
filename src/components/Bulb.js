import React , {useState} from 'react'
import image1 from "../images/dark.png"
import image2 from "../images/bright.png"

const Bulb = () => {
let [color , setColor] = useState(image1)

const changeColor = () => {
  setColor(!color)

}
return (
  <>
    <div className='container' style={{ backgroundColor: color ? image2 : image1 ,  border: color ? "green" : "white" , width: "50%" , height:"300px", margin:"auto"}}>
    <div style={{}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptates impedit ad quis necessitatibus saepe!</p>


  <button onClick={() =>changeColor() }>{color}</button> 
    </div>
    </div >

  </>
)
}

export default Bulb
