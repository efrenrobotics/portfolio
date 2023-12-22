import Lottie from "lottie-react";
import arrowDown from "../assets/arrow-down.json";

const DownArrow = () => {
  return (
    <div className="m-5 w-auto flex justify-center ">
      <Lottie className="w-12" animationData={arrowDown} />
    </div>
  );
};

export default DownArrow;
