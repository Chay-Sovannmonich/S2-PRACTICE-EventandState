import React from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = React.useState(false);

  function onSunClick() {
    // Change the state to false (it's sunny)
    setIsRaining(false);
  }

  function onRainClick() {
    // Change the state to true (it's raining)
    setIsRaining(true);
  }

  function getTitle() {
    // This function manages the H1 text, depending on the weather
    return isRaining ? "Rain Time" : "Sun Time";
  }

  function getBackgroundColor() {
    // This function manages the main class value, depending on the weather
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
