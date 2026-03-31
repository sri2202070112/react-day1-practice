import { useState } from "react";

function Test() {
  const thoughts = [
    "The best way to predict the future is to create it. 🚀",
    "Small steps lead to big changes. ✨",
    "Creativity is intelligence having fun. 🎨",
    "Believe you can and you're halfway there. 💫",
    "React is all about thinking in components. ⚛️",
    "Design is not just what it looks like, it's how it works. 🛠️",
    "Code is like humor; when you have to explain it, it’s bad. 😂"
  ];

  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  function handleClick() {
    // Pick a random thought different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * thoughts.length);
    } while (newIndex === thoughtIndex && thoughts.length > 1);
    
    setThoughtIndex(newIndex);
    setHasStarted(true);
  }

  return (
    <div className="text-box">
      <p>This is my first component 🎉</p>
      <button className="button-premium" onClick={handleClick}>
        {hasStarted ? "Next Thought" : "Get a Thought"}
      </button>
      {hasStarted && (
        <p key={thoughtIndex} className="fade-in" style={{ marginTop: "20px", color: "var(--primary)", fontWeight: "600", fontStyle: "italic" }}>
          "{thoughts[thoughtIndex]}"
        </p>
      )}
    </div>
  );
}

export default Test;