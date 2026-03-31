import { useState } from "react";

function Test() {
  const thoughts = [
    "The best way to predict the future is to create it. 🚀",
    "Small steps lead to big changes. ✨",
    "Creativity is intelligence having fun. 🎨",
    "Believe you can and you're halfway there. 💫",
    "React is all about thinking in components. ⚛️",
    "Design is not just what it looks like, it's how it works. 🛠️",
    "Code is like humor; when you have to explain it, it’s bad. 😂",
    "Stay hungry, stay foolish. 🍎",
    "Quality is not an act, it is a habit. 💎",
    "Simplicity is the soul of efficiency. ⚡",
    "Your limit is only your imagination. 🌌",
    "Great things never come from comfort zones. ⛰️",
    "Innovation distinguishes between a leader and a follower. 💡",
    "Success is not final; failure is not fatal. 🛡️",
    "The only way to do great work is to love what you do. ❤️",
    "If you want to live a happy life, tie it to a goal. 🎯",
    "Don't stop until you're proud. 🥇",
    "Focus on being productive instead of busy. 🔥",
    "Mistakes are proof that you are trying. 🛠️",
    "Every accomplishment starts with the decision to try. 🚪",
    "In the middle of every difficulty lies opportunity. 🌈",
    "Hard work beats talent when talent doesn't work hard. 💪",
    "The way to get started is to quit talking and begin doing. 🎤",
    "Dream big and dare to fail. 🌠",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. ✨",
    "Whether you think you can or you think you can't, you're right. 🧠",
    "The future depends on what you do today. 🗓️",
    "Your time is limited, so don't waste it living someone else's life. ⏳",
    "Action is the foundational key to all success. 🔑",
    "Logic will get you from A to B. Imagination will take you everywhere. 🚀",
    "Software is a great combination between artistry and engineering. 💻",
    "First, solve the problem. Then, write the code. 🧪",
    "Experience is the name everyone gives to their mistakes. 📚",
    "Talk is cheap. Show me the code. 👨‍💻",
    "Programs must be written for people to read, and only incidentally for machines to execute. 📖",
    "The most disastrous thing that you can ever learn is your first programming language. 🐍",
    "A good programmer is someone who always looks both ways before crossing a one-way street. 🚦",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. 🪓",
    "The computer was born to solve problems that did not exist before. 🖥️",
    "Documentation is a love letter that you write to your future self. 💌",
    "The function of good software is to make the complex appear to be simple. 🎭",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. 🤝",
    "Testing leads to failure, and failure leads to understanding. 🧪",
    "A user interface is like a joke. If you have to explain it, it’s not that good. 🃏",
    "Wait, it works on my machine... 🤡",
    "There are only two hard things in Computer Science: cache invalidation and naming things. 🏷️",
    "One man’s constant is another man’s variable. 🔄",
    "Coffee is a liquid that helps you turn code into bugs... wait, other way around. ☕",
    "Debugging is like being the detective in a crime movie where you are also the murderer. 🕵️‍♂️",
    "Deleted code is debugged code. 🗑️",
    "The best code is no code at all. 🍃",
    "If at first you don't succeed, call it version 1.0. 📦",
    "Before software can be reusable it first has to be usable. 🛠️",
    "Programming is 10% writing code and 90% understanding why it’s not working. 🧐",
    "Refactor early, refactor often. 🧹",
    "Clean code always looks like it was written by someone who cares. 🧼",
    "Don't comment bad code—rewrite it. ✍️",
    "Keep it simple, stupid (KISS). 💋",
    "Don't repeat yourself (DRY). 🏜️",
    "You aren't gonna need it (YAGNI). 🚫"
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