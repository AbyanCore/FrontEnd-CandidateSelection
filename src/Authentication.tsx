import React from "react";

const Authentication = () => {
  React.useEffect(() => {
    // Script <INPUT PIN SYSTEM>
    // Di taruh di js file terpisah atau di dalam tag script
    // Start Script
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#pininput input");

    const pinhandle = (e: any) => {
      const input: HTMLInputElement = e.target;
      let value = input.value;

      let fieldIndex: number = Number(input.name);

      if (value.length === 1 && fieldIndex < inputs.length - 1) {
        inputs[Number(fieldIndex) + 1].focus();
      }

      // if (e.key === "Backspace" && input.value === "" && fieldIndex > 0) {
      //   inputs[fieldIndex - 1].focus();
      // }

      if (e.key === "ArrowRight" && fieldIndex < inputs.length - 1) {
        inputs[fieldIndex + 1].focus();
      }

      if (e.key === "ArrowLeft" && fieldIndex > 0) {
        inputs[fieldIndex - 1].focus();
      }

      if (value !== "" && /^[1-9]$/.test(e.key)) {
        input.value = e.key; // Append all characters except the first one
      }
    };

    inputs.forEach((input, index) => {
      input.name = String(index);
      input.addEventListener("keyup", pinhandle);
    });

    // get inputs value
    const getPin = () => {
      let pin = "";
      inputs.forEach((input) => {
        pin += input.value;
      });
      return pin;
    };

    // End Script
  }, []);

  return (
    <div className="w-screen h-screen -z-50 bg-[url('/home/abyan/Documents/Nodejs/ITSC_FE_Election/src/assets/blob-scene-haikei.svg')] bg-cover bg-center">
      <div className="absolute h-1/2 w-screen flex justify-center items-center">
        <img
          src="src/assets/ITSCLogo.png"
          alt="Logo ITSC"
          className="absolute top-5 left-5 rounded-full w-14 h-14"
        ></img>
        <h1 className="font-bold text-8xl text-[#E5CFF7]">ITSC</h1>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        <div className="w-max h-max flex flex-col p-5 bg-[rgba(255,255,255,0.2)] rounded-xl backdrop-blur-xl backdrop-contrast-100 backdrop-saturate-100">
          <h1 className="font-sans text-2xl text-center mb-10 text-[#E5CFF7] bg-[#5B0888] rounded-xl p-2">
            Login
          </h1>
          <form
            className="flex flex-col gap-3 justify-center p-2 border-[#5B0888] border-4 rounded-xl"
            method="POST"
            action="#"
          >
            <label className="text-white text-xl text-center">Username</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border-[0.1px] border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
            />
            <label className="text-white text-xl text-center">Token</label>
            <div id="pininput" className="flex flex-grow justify-around">
              <input
                placeholder="T0"
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                className=" border-[0.1px] w-10 border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
              />
              <input
                placeholder="T1"
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                className="border-[0.1px] w-10 border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
              />
              <input
                placeholder="T2"
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                className="border-[0.1px] w-10 border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
              />
              <input
                placeholder="T3"
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                className="border-[0.1px] w-10 border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
              />
              <input
                placeholder="T4"
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                className="border-[0.1px] w-10 border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
              />
              <input
                placeholder="T5"
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]*"
                className="border-[0.1px] w-10 border-[#E5CFF7] bg-transparent rounded-lg text-center text-[#E5CFF7] text-xl p-1"
              />
            </div>
            <button className="bg-[#5B0888] rounded-lg text-center p-1 px-3 text-[#E5CFF7] text-xl">
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
