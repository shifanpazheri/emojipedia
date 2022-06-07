import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function addEntry(emojiObj) {
  return (
    <Entry
      key={emojiObj.id}
      symbol={emojiObj.emoji}
      name={emojiObj.name}
      meaning={emojiObj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(addEntry)}</dl>
    </div>
  );
}

export default App;
