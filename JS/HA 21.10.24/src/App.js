
import React from 'react';
import './App.css';
function App() {
  const greeting = "Hallo! Heute ist der " + new Date().toLocaleDateString()
  const sum = 5 + 7;
  const showAlert = () => {
    alert("WOW du hast ein Button gertückt.");
  };
  return (
    <>
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{greeting}</h2>
      <h3 style={{ color: "green" }}>Die Summe von 5 + 7 ist: {sum}</h3>
      
      <button onClick={showAlert}>Nicht Drücken</button>
    </>
  );
}
export default App;
