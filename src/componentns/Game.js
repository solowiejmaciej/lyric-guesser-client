import React, {useState,useEffect} from 'react';
import "./Game.css";
import PlayButton from './PlayButton'


function Game() {
    const [data, setData] = useState(null)
    const [score, setScore] = useState(0)
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

    useEffect(() => {
        handleClick();
    }, [])

    const handleClick = async () => {
        try {
            const data = await (await fetch('http://146.59.86.9:3500/song')).json()
            setData(data)
        } catch (err) {
            console.log(err.message)
        }
        
    }

    const tryAgain = async () => {
        try {
            const data = await (await fetch('http://146.59.86.9:3500/song')).json()
            setScore(0)
            setData(data)
        } catch (err) {
            console.log(err.message)
        }
        
    }

    const handleGameLogic = event => {
        console.log(data.artistName)
        event.preventDefault();
        if (data.artistName.includes(message) && message!=='' && message !==' ') {
            alert("Brawo!");
            handleClick()
            setScore(score + 1);
        }else{
            alert("Spróbuj ponownie");
            setScore(0)
        }
    }

    function checkResponse(data) {
        if (data) {
            return <div className='App'>
                    {data.lyric.map(row =>(
                        <p className='lyric'>{row}</p>
                    ))}
                </div>;
        } else {
            return null;
        }

    }

    return (
        <div>
            <div className="Game">
            <PlayButton handleClick={handleGameLogic} handleChange={handleChange} tryAgain={tryAgain} value={message} score={score}></PlayButton>
            </div>
            {checkResponse(data)}
        </div>
    )

}
export default Game;