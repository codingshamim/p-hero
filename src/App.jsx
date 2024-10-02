import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Cookings from "./Components/Cookings/Cookings";
import Header from "./Components/Header/Header";

function App() {
  const [cooksDetail, setCooksDetail] = useState([]);
  const [error, setError] = useState({
    state: false,
    msg: "",
  });
  const handleCookDetails = (cooks) => {
    const isExist = cooksDetail.find(
      (cookInfo) => cookInfo?.recipe_id === cooks?.recipe_id
    );
    if (isExist) {
      setError({
        ...error,
        state: true,
        msg: "This item already in your cook list",
      });
    } else {
      const newCookDetail = [...cooksDetail, cooks];
      setCooksDetail(newCookDetail);
    }
  };
  return (
    <>
      {error?.state && (
        <div
          className={`toast-container fixed top-0  ${
            error?.state && "top-16"
          } w-full flex justify-center transition-all duration-150 items-center`}
        >
          <div
            className={`toast-wrapper  rounded-sm py-2 px-4 transition-all duration-150 bg-[#e0e0e0] shadow-md   `}
          >
            <p className="text-red-500">{error?.msg}</p>
          </div>
        </div>
      )}
      <Header></Header>
      <div className="flex px-20 gap-5">
        <Blogs handleCookDetails={handleCookDetails}></Blogs>
        <Cookings
          cooksDetail={cooksDetail}
          setCooksDetail={setCooksDetail}
        ></Cookings>
      </div>
    </>
  );
}

export default App;
