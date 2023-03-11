import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [click, afterClick] = useState("");

  function set(event) {
    setName(event.target.value);
  }

  function update(event) {
    afterClick(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={update}>
      <h1>Hello,{click}</h1> 
      <input
        onChange={set}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
