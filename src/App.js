import logo from "./logo.svg";
import "./App.css";
import Toolbar from "./Toolbar";
import { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import Person from "./Person";

function handleClick() {
  alert("You clicked me");
}

function handleClickParam(number) {
  alert(number);
}
// function App() {
//   return (
//     <div className="App">
//       {/* <button onClick={handleClick}>I do not do anything</button> */}

//       {/* <button
//         onClick={function handleClick() {
//           alert("You clicked me");
//         }}
//       >
//         I do not do anything
//       </button> */}

//       {/* <button
//         onClick={()=>{
//           alert("You clicked me");
//           handleClickParam(100);
//         }}
//       >
//         I do not do anything
//       </button> */}

//       {/* <button onClick={()=>{
//         handleClickParam(100)
//         }}>I do not do anything</button>
//     </div> */}
//   );
// }

// function OnPlay(){
//   alert("You clicked PLAY");
// }

// function OnUpload(){
//   alert("Your UPLOAD image");
// }

// function App() {
//   return (
//     <div className="App">
//       <Toolbar onPlayMovie={OnPlay} onUploadImage={OnUpload}></Toolbar>
//      </div>
//   );
// }

// function OnPlay(number){
//   alert(number);
// }

// function App() {
//   return (
//     <div className="App">
//       <Toolbar onPlayMovie={OnPlay} onUploadImage={OnUpload}></Toolbar>
//      </div>
//   );
// }

function App() {
  // let data = 100;

  // function increment() {
  //   data += 10;
  //   console.log(data);
  // }

  const [data, setScore] = useState(100);

  function increment() {
    setScore(data + 10);
  }

  return (
    <div className="App">
      {/* <h1>Score : {data}</h1>
      <button onClick={increment}>Increment</button>

      <Form></Form> */}
      {/* <Gallery></Gallery> */}
      <Person></Person>
    </div>
  );
}

export default App;
