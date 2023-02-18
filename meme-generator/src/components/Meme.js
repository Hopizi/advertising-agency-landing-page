import React from "react";
import memesData from "../memesData"



export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }


    return(
        <main>
            <div className="form">
                <input 
                name="topText"
                className="form-inputs" type="text" 
                placeholder="Top text"
                value={meme.topText}
                onChange={handleChange}
                >
                </input>
                <input
                name="bottomText"
                className="form-inputs" type="text" 
                placeholder="Bottom text"
                value={meme.bottomText}
                onChange={handleChange}
                >
                </input>
                <button className="form-button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}