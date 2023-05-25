import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

export default function NotFound() {
  return (
    <div className="app_wrapper">
      <p>Page Is Not found</p>
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_qyAboZXPX9.json"
        className="player_pencil animate__animated animate__zoomIn"
        autoplay
        loop
      />
    </div>
  );
}
