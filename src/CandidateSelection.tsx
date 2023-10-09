import Image1 from "./assets/LHF7U_FERDZ.png";
import Image2 from "./assets/ZPTzu_SHOCKER.png";

const CandidateSelection = () => {
  return (
    <div className="flex flex-col w-screen h-fit bg-[#E5CFF7]">
      <div className="absolute p-5">
        <h1 className="text-[#5B0888] font-bold text-6xl">1</h1>
      </div>
      <div className="absolute flex flex-row w-max gap-[100px] self-center items-center justify-around p-5 m-4 bg-white rounded-full">
        <button className="px-10">Perveus</button>
        <h1 className="font-semibold text-lg">Vote Your Candidate</h1>
        <button className="px-10">Next</button>
      </div>
      <div className="w-screen flex flex-row">
        <div className="flex-[1] flex flex-row items-end">
          <div className="z-[1] w-fit h-fit">
            <img src={Image1} className="w-[500px]" alt="rrq" />
          </div>
          <div className="z-[2] w-fit h-fit">
            <img src={Image2} alt="rrq" />
          </div>
        </div>
        <div className="flex flex-col h-screen flex-[1.6]">
          <div className="mt-32 flex flex-col p-5 flex-[1] text-center">
            <h1 className="text-[#5B0888] font-bold text-6xl">Kesatria Pagi</h1>
            <p className="text-[#5B0888] font-bold text-4xl">&</p>
            <h1 className="text-[#5B0888] font-bold text-6xl">
              Pendekar Malam
            </h1>
          </div>
          <div className="flex justify-center items-center self-center flex-[1] w-max">
            <h1 className="text-4xl font-semibold font-mono typed text-[#5B0888]">
              "Tidak Besok, Tapi Hari ini"
            </h1>
          </div>
          <div className="flex flex-[1] w-fit self-center gap-10 flex-row justify-center items-center">
            <button className="text-2xl flex-[3] text-[#E5CFF7] bg-[#713ABE] p-5 px-24 rounded-3xl">
              Vote Now
            </button>
            <button className="text-2xl flex-[1] text-[#E5CFF7] bg-[#5B0888] p-5 px-14 rounded-3xl">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSelection;
