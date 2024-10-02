import CurrentCooked from "../CurrentCooked/CurrentCooked";

const CurrentCooking = ({ currentCook }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">
        Current Cooking: {currentCook.length}
      </h2>
      <div className="mt-3 mb-2 flex mr-5 text-sm">
        <p className="ml-6">Name</p>
        <p className="ml-20">Time</p>
        <p className="ml-6">Calories</p>
      </div>
      {currentCook.map((currentCooks) => (
        <CurrentCooked currentCook={currentCooks}></CurrentCooked>
      ))}
    </div>
  );
};

export default CurrentCooking;
