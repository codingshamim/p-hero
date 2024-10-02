import { useState } from "react";
import Cooking from "../Cooking/Cooking";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Cookings = ({ cooksDetail, setCooksDetail }) => {
  const [currentCook, setCurrentCook] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]);

  const handleWantCook = (cooked) => {
    const newCurrentCook = [...currentCook, cooked];
    setCurrentCook(newCurrentCook);
  };
  return (
    <div className="w-4/12 border-2 rounded-2xl text-center">
      <h2 className="mt-5 font-bold text-2xl">
        Want To Cook: {cooksDetail.length}
      </h2>
      <hr className="w-4/6 h-[1px] my-2 border-none bg-gray-300 m-auto" />
      <div className="mt-3 mb-2 flex mr-5 text-sm">
        <p className="ml-6">Name</p>
        <p className="ml-20">Time</p>
        <p className="ml-6">Calories</p>
      </div>
      {cooksDetail.map((cookdetal) => (
        <Cooking
        cooks={cooksDetail}
          cookdetal={cookdetal}
          handleWantCook={handleWantCook}
          setCurrentCooking={setCurrentCooking}
          currentCooking={currentCooking}
          setCooksDetail={setCooksDetail}
        ></Cooking>
      ))}
      <CurrentCooking currentCook={currentCooking}></CurrentCooking>
    </div>
  );
};

export default Cookings;
