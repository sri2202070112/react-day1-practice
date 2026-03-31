function Test() {
  function handleClick() {
    alert("Welcome to my first React component 🚀");
  }

  return (
    <div className="text-box">
      <p>This is my first component 🎉</p>
      <button className="button-premium" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Test;