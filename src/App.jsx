import "./App.css";
import { useColor } from "./store/color";

function App() {
  // we will bring in the functions we defined in color.js and destructure it so we can use it in our component
  // pass a state into the custom hook we created; this state will now be used to set and update the values
  const { text, color, setText, setColor } = useColor((state) => ({
    text: state.text,
    color: state.color,
    setText: state.setText,
    setColor: state.setColor,
  }));

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    setColor(text);
  };

  return (
    <div className="container">
      <h1 style={{ color: color }}>State management using Zustand</h1>
      <br />
      <h1>{text}</h1>
      <div className="input">
        <input
          type="text"
          className="input"
          value={text}
          onChange={handleInputChange}
        />
        <button className="btn" onClick={handleButtonClick}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
