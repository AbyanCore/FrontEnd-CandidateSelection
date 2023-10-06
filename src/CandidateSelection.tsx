import React from "react";

const CandidateSelection = () => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute bg-cover w-screen h-screen blur-[5px] -left-2 -top-2 bg-[url('src/assets/wave-haikei1.svg')]" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="w-screen h-max z-10 flex flex-col bg-[url('src/assets/blurry-gradient-haikei.svg')] bg-cover bg-center">
        <nav className="w-1/4 self-center flex flex-row justify-between items-center p-1 mb-5 m-5 bg-[rgba(255,255,255,0.4)] rounded-xl backdrop-blur-xl backdrop-contrast-100 backdrop-saturate-100">
          <span className="material-symbols-outlined scale-150 p-5 px-10 cursor-pointer">
            arrow_back_ios
          </span>
          <span className="material-symbols-outlined scale-150 p-5 px-10 cursor-pointer">
            arrow_forward_ios
          </span>
        </nav>
        <div className="w-screen h-screen flex flex-row p-5">
          <div className="flex-[2]">
            <h1>Photo</h1>
          </div>
          <div className="flex-[2.3] flex flex-col">
            <span className="flex flex-col text-6xl font-bold pt-10 -mb-10">
              <h1 className="bg-[#E5CFF7] w-max p-4 rounded-tr-3xl rounded-tl-3xl text-[#5B0888]">
                Jhoe Isaku
              </h1>
              <h1 className="bg-[#E5CFF7] w-max p-4 rounded-br-3xl rounded-bl-3xl rounded-tr-3xl text-[#5B0888]">
                Jambaku Kusato
              </h1>
            </span>
            <div className="h-1/2 flex items-center">
              <h1 className="text-4xl text-[#5B0888]">
                “Tidak perlu kata-kata yang penting bukti nyata”
              </h1>
            </div>
            <button className="w-1/4 z-10 self-center bg-[#5B0888] p-3 rounded-xl">
              <p className="text-[#E5CFF7] font-semibold">Vote Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSelection;
