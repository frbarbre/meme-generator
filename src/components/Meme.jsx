import { useState, useEffect } from "react"
import { MemeImg } from "../assets"

const Meme = () => {
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: MemeImg
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data => setAllMemes(data.data.memes))
    }, [])    
    
    function getMeme() {
      var randomNumber = Math.floor(Math.random() * allMemes.length);
      var url = allMemes[randomNumber].url
      
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url,
      }))
    }

    function handleChange(event) {
      const { value, name } = event.target
      setMeme(prevMeme => {
        return {
          ...prevMeme,
          [name]: value
        }
      })
    }

  return (
    <div className="flex flex-col gap-[15px]">
        <div className="flex flex-col xs:flex-row gap-[17px]">
            <input 
              type="text" 
              placeholder="Top Meme Text" 
              className="p-[11px] border-[#D5D4D8] border-[1px] rounded-[5px] w-[100%] text-center xs:text-left text-[12px]" 
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="Bottom Meme Text" 
              className="p-[11px] border-[#D5D4D8] border-[1px] rounded-[5px] w-[100%] text-center xs:text-left text-[12px]"
              name="bottomText" 
              value={meme.bottomText}
              onChange={handleChange}
            />
        </div>

        <button type="button" onClick={getMeme} className="width-[100%] gradient-purple flex items-center justify-center py-[11px] rounded-[5px] text-white font-bold text-[16px] -tracking-[10%]">
            Get a new meme image 🖼
        </button>

        <div className="relative w-[90%] mx-auto mt-[21px]">
          <img 
            src={meme.randomImage} 
            alt="meme" 
            className="w-[100%] object-contain " 
          />
          <div className="absolute inset-0 flex flex-col justify-between items-center p-[50px]">
            <h2 className="text-white text-[2em] font-impact text-shadow uppercase">{meme.topText}</h2>
            <h2 className="text-white text-[2em] font-impact text-shadow uppercase">{meme.bottomText}</h2>
          </div>
        </div>
    </div>
  )
}

export default Meme