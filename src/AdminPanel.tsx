import React from "react";

const AdminPanel = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="bg-[#E5CFF7] w-screen py-10 flex flex-col bg-cover bg-center">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
      />
      <div className="sm:relative md:absolute flex w-screen h-max justify-center">
        <h1 className="text-[#5B0888] font-light p-10 text-5xl text-center">
          Candidate Selected Summary Preview
        </h1>
      </div>
      <div className="flex flex-row flex-wrap gap-10 w-screen h-screen justify-around items-center p-10">
        <div className="flex flex-col items-center">
          <h1
            id="Score"
            className="p-10 font-bold font-sans text-6xl text-[#5B0888] flex items-center gap-4"
          >
            <span className="material-symbols-outlined scale-[2]">person</span>
            102
          </h1>
          <div className="bg-[#9D76C1] p-10 rounded-3xl">
            <h1 className="text-[#E5CFF7] font-bold font-sans text-lg">
              Candidate 1
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1
            id="Score"
            className="p-10 font-bold font-sans text-6xl text-[#5B0888] flex items-center gap-4"
          >
            <span className="material-symbols-outlined scale-[2]">person</span>
            20
          </h1>
          <div className="bg-[#9D76C1] p-10 rounded-3xl">
            <h1 className="text-[#E5CFF7] font-bold font-sans text-lg">
              Candidate 2
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1
            id="Score"
            className="p-10 font-bold font-sans text-6xl text-[#5B0888] flex items-center gap-4"
          >
            <span className="material-symbols-outlined scale-[2]">person</span>
            120
          </h1>
          <div className="bg-[#9D76C1] p-10 rounded-3xl">
            <h1 className="text-[#E5CFF7] font-bold font-sans text-lg">
              Candidate 3
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
