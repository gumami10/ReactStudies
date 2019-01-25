import React from "react";
import Joke from "./Joke";
export default function App() {
  return (
    <div>
      <Joke Question={"hello\n"} Punchline={"hi"} />
      <Joke Question={"hello\n"} Punchline={"hi"} />
      <Joke Question={"hello\n"} Punchline={"hi"} />
      <Joke Question={"hello\n"} Punchline={"hi"} />
      <Joke Question={""} Punchline={"hey"} />
    </div>
  );
}
