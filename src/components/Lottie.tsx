import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../store/optionsFormSlice";
import { lottiePage, lottieSrcValue, setLottieSrc } from "../store/lottieSlice";

export const lottiePencil = {
  idea: "https://assets5.lottiefiles.com/packages/lf20_sostbrzv.json",
  sleepy: "https://assets5.lottiefiles.com/packages/lf20_kkkelbun.json",
  //happy: "https://assets5.lottiefiles.com/packages/lf20_oc9peor8.json",
  thinking: "https://assets5.lottiefiles.com/packages/lf20_qyAboZXPX9.json",
  strong: "https://assets5.lottiefiles.com/packages/lf20_lgyb3olf.json",
};

export function LottieSet() {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const lottieSrc = useSelector(lottieSrcValue);
  const page = useSelector(lottiePage);

  useEffect(() => {
    let inactivity = setTimeout(() => {
      dispatch(setLottieSrc(lottiePencil.sleepy));
    }, 10000); // change image src after 10 seconds of inactivity

    // clear timeout on component unmount or user activity
    const resetTimeout = () => {
      clearTimeout(inactivity);

      const src =
        optionsArr.length >= 2
          ? lottiePencil.strong
          : (page === "home" && lottiePencil.idea) || lottiePencil.thinking;

      dispatch(setLottieSrc(src));
      inactivity = setTimeout(() => {
        dispatch(setLottieSrc(lottiePencil.sleepy));
      }, 10000);
    };

    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("keydown", resetTimeout);
    document.addEventListener("click", resetTimeout);

    //remove the event listeners and clear the timeout when the component unmounts
    // (by returning clean up function from useEffect)
    return () => {
      document.removeEventListener("mousemove", resetTimeout);
      document.removeEventListener("keydown", resetTimeout);
      document.removeEventListener("click", resetTimeout);
      clearTimeout(inactivity);
    };
  }, [dispatch, lottieSrc, optionsArr.length, page]);

  return (
    <Player
      src={lottieSrc}
      className="player_pencil animate__animated animate__zoomIn"
      autoplay
      loop
    />
  );
}
