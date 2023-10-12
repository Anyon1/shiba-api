import React, {useEffect} from "react";

import './App.css'
import Axios from "axios"

function App() {
  const [count, setCount] = React.useState(0)
  const [allShibas, setAllShibas] = React.useState([])
  const [shibaImg, setShibaImg] = React.useState("")
  const [showImage, setShowImage] = React.useState(false)
  function nextImage() {
    !showImage && setShowImage( prevImage => true)
    setCount(prevCount => {
      return prevCount === allShibas.length-1 ?  0 :  prevCount + 1
    })
    setShibaImg(allShibas[count])
  }


  useEffect(() => {
      Axios.get("http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true")
      .then((response) => setAllShibas(response.data))
          .catch((err) => console.log(err))

  }, []);

  return (
    <div className="content">
      <button onClick={nextImage}>Show {showImage? "Next" : "First"} Image</button>
      {showImage && <img src={shibaImg} alt={""} className="animal--image"/>}
    </div>
  )
}

export default App
