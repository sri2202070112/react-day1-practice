function Test() {
    function handleClick() {
        alert("Welcome to my first React component 🚀");
    }

    return (
        <div>
            <p>This is my first component 🎉</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Test;