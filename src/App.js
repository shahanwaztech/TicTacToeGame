import React from "react";
import Board from "./TicTacToeGame/Board";

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",background:"#de9967",height:"100vh"}}>
      <h1>Tic Tac Toe Game</h1>
    <Board/>
    </div>
  );
}

export default App;
