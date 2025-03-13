import React from "react";

function App() {
  /* You will need to use a state to keep the value of the text entered */
  const [text, setText] = React.useState("");

  /* You will need a function to handle a key pressed on the first input and update the state */
  function handleInput(event) {
    setText(event.target.value);
    console.log(event.target.value); // Log the input value to the console
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text!</label>
      <input type="text" value={text} onChange={handleInput} />

      <p>
        <label>Here is the text in upper case</label>
        {/* This input will need to display the text entered in upper case */}
        <input type="text" value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
