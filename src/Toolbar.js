import React from "react";
import Button from "./Button";

// export default function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <button onClick={onPlayMovie}>Play Movie</button>
//       <button onClick={onUploadImage}>Upload Image</button>
//     </div>
//   );
// }

export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button
        onClick={() => {
          onPlayMovie(555);
        }}
      >
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}
