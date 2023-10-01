import React from "react";

const CandidateSelection = () => {
  React.useEffect(() => {
    const candidates = document.querySelectorAll("#candidates img");

    const selectedcandidate = (e: any) => {
      const target = e.target as HTMLImageElement;
      const id = target.id;
      console.log(id);
    };

    candidates.forEach((candidate, index) => {
      candidate.id = String(index);

      candidate.addEventListener("click", selectedcandidate);
    });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-[url('src/assets/blurry-gradient-haikei.svg')] bg-cover bg-center">
      <h1 className="text-[#5B0888] text-6xl text-center p-10 font-sans font-semibold">
        Choose Your Candidate
      </h1>
      <div id="candidates" className="flex flex-row justify-center">
        <img
          src="https://picsum.photos/seed/943/300/200"
          alt="candidate 1"
          className="rounded-xl cursor-pointer"
        ></img>
        <img
          src="https://picsum.photos/seed/2/300/200"
          alt="candidate 2"
          className="rounded-xl cursor-pointer"
        ></img>
        <img
          src="https://picsum.photos/seed/5/300/200"
          alt="candidate 3"
          className="rounded-xl cursor-pointer"
        ></img>
      </div>
    </div>
  );
};

export default CandidateSelection;
