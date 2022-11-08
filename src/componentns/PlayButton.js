import "./PlayButton.css";


function PlayButton(props) {
  return (
    <div className="container">
    <div className="PlayButton">
      <h2>🔥: {props.score} </h2>
      <br></br>
      <br></br>
      <input type="text" placeholder="podaj wykonawcę" autoComplete="off" id="message" name="message" onChange={props.handleChange} value={props.message}></input>
      <br></br>
      <br></br>
      <br></br>
      <button className="button-82-pushable" onClick={props.handleClick}>
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">Zgadnij!</span>
      </button>
      <button className="button-82-pushable" onClick={props.tryAgain}>
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">↺</span>
      </button>
    </div>
    <select className="button-82-pushable-select" >
    <option value="">--Wybierz tryb--</option>
    <option value="dog">Dog</option>
      </select>
    </div>
  );
}

export default PlayButton;
